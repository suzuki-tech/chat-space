# README

## userテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|passwaord|integer|null: false|

### Association
- has_many :groups_users
- has_many :message

### インデックス
- add_index :users, email

## groupテーブル

|Column|Type|Options|
|------|----|-------|
|name|text|null: false|
|text|text|null: false|
|image||null: false|

### Association
- has_many :groups_users
- has_many :message

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
|text|text|null: false|
|image|string|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user