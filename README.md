# README

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|passwaord|integer|null: false|

### Association
- has_many :groups_users
- has_many :messages
- has_many :groups, through: :groups_users

### インデックス
- add_index :users, email

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|

### Association
- has_many :groups_users
- has_many :message
- has_many :users, through: :groups_users

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messageテーブル

|Column|Type|Options|
|------|----|-------|
|text|text||
|image|string||
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user