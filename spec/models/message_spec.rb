require 'rails_helper'

RSpec.describe Message, type: :model do
    describe '#create' do
      context 'can save' do
        it 'is valid with content' do
          expect(build(:message, image: nil)).to be_valid
        end
  
        it 'is valid with image' do
          expect(build(:message, content: nil)).to be_valid
        end
      
        it "メッセージと画像があれば送信できる" do
          expect(build(:message)).to be_valid
        end        
    end
      
      context "can't save" do
        it "メッセージも画像もないと送信できない" do
          message = build(:message, content: nil, image: nil)
          message.valid?
          expect(message.errors[:content]).to include("を入力してください")
        end

        it "group_idがないと保存できない" do
          message = build(:message, group_id: nil)
          message.valid?
          expect(message.errors[:group]).to include("を入力してください")
        end

        it "user_idがないと保存できない" do
          message = build(:message, user_id: nil)
          message.valid?
          expect(message.errors[:user]).to include("を入力してください")
        end
      end
    
      
  
  end
end