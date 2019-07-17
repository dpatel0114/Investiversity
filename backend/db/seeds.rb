# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Stock.destroy_all
Portfolio.destroy_all

krunal = User.create(firstname: 'Krunal', lastname: 'patel', username: 'krunalp', email: 'kp12@live.com')
kris = User.create(firstname: 'Kris', lastname: 'shah', username: 'kriss', email: 'ks23@live.com')
# anjali = User.create(firstname: 'Anjali', lastname: 'jain', username: 'anjali')
# zalak = User.create(firstname: 'Zalak', lastname: 'dave', username: 'zalak')

stock1 = Stock.create(name: 'apple', ticker: 'AAPL', price: 200)
stock2 = Stock.create(name: 'visa', ticker: 'V', price: 170)

portfolio1 = Portfolio.create(stock_id: stock1.id, user_id: krunal.id, price: 2000)
portfolio2 = Portfolio.create(stock_id: stock2.id, user_id: kris.id, price: 1000)