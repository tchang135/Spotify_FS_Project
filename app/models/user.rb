# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  email           :string           not null
#  birth_date      :date             not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  name            :string           not null
#
class User < ApplicationRecord
    validates :username, :email, :name, :password_digest, :session_token, 
              :birth_date, presence: true
    validates :username, 
        uniqueness: true, 
        length: { in: 3..30 }, 
        format: { without: URI::MailTo::EMAIL_REGEXP, message:  "can't be an email" }
    validates :email, 
        uniqueness: true, 
        length: { in: 3..255 }, 
        format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { in: 6..255 }, allow_nil: true
    
    before_validation :ensure_session_token

    has_secure_password


    def self.find_by_credentials(credential, password)
        field = credential =~ URI::MailTo::EMAIL_REGEXP ? :email : :username
        user = User.find_by(field => credential)
        user&.authenticate(password)
    end

    def ensure_session_token
        self.session_token ||= generate_unique_session_token
    end

    def reset_session_token!
        self.update!(session_token: generate_unique_session_token)
        self.session_token
      end

private

    def generate_unique_session_token
        while true
            token = SecureRandom.urlsafe_base64
            return token unless User.exists?(session_token: token)
        end
    end
end
