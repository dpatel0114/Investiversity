# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Portfolio.destroy_all

krunal = User.create(firstname: 'Krunal', lastname: 'patel', username: 'krunalp', password: 'kp12345', email: 'kp12@live.com', remaining_balance: 500, invested_balance: 400)

kris = User.create(firstname: 'Kris', lastname: 'shah', username: 'kriss', password: 'ks34567', email: 'ks23@live.com', remaining_balance: 600, invested_balance: 300)
# anjali = User.create(firstname: 'Anjali', lastname: 'jain', username: 'anjali', password: 'aj45678', email: 'aj15@live.com', remaining_balance: 500, invested_balance: 400)
# zalak = User.create(firstname: 'Zalak', lastname: 'dave', username: 'zalak', password: 'zd67890', email: 'zd11@live.com', remaining_balance: 500, invested_balance: 400)

# stock1 = Stock.create(name: 'apple', ticker: 'AAPL', price: 200)
# stock2 = Stock.create(name: 'visa', ticker: 'V', price: 170)

portfolio1 = Portfolio.create(user_id: krunal.id, price: 200, ticker: 'MSFT')
portfolio2 = Portfolio.create(user_id: kris.id, price: 170, ticker: 'V')