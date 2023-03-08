class StaticPagesController < ApplicationController
    def frontend_index
      render file: "#{Rails.root}/public/index.html", layout: false
    end
  end
