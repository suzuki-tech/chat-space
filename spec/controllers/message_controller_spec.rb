require 'rails_helper'

describe MessagesController do
  # letを使ってテスト中使用するインスタンスを定義
  let(:group) { create(:group) }
  let(:user) { create(:user)}

  describe "#index" do
    context "user logins" do
      # 各exampleが実行される直前に毎回実行される
      before do
        # loginはMacrosで定義
        login user
        # messagesのルーティングはgroupsにネストされているため、group_idを含んだパスを生成
        get :index, params: { group_id: group.id }
      end

      it "assigns @message" do
        expect(assigns(:message)).to be_a_new(Message)
      end

      it "assigns @group" do
        expect(assigns(:group)).to eq group
      end

      it 'renders index' do
        expect(response).to render_template :index
      end
    end

    context "not login" do
      before do
        get :index, params: { group_id: group.id }
      end

      it 'redirects to new_user_session_path' do
        expect(response).to redirect_to(new_user_session_path)
      end
    end
  end
end