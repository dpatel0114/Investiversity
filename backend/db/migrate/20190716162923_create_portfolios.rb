class CreatePortfolios < ActiveRecord::Migration[5.2]
  def change
    create_table :portfolios do |t|
      t.integer :price 
      t.string :ticker
      t.integer :quantity
      t.float :total_price
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
