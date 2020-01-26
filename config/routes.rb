Rails.application.routes.draw do
  root "messages#index"
  resourses :messages, only: :index 
end
