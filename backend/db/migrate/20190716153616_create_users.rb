class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :firstname
      t.string :lastname
      t.string :username
      t.string :email
      t.float :remaining_balance, :default => 1000
      t.float :invested_balance, :default => 0
      t.string :password_digest

      t.timestamps
    end
  end
end
