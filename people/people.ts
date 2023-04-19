/*
1
db.people.find()

2
db.people.count()

3
db.people.find({state: 'Arizona'})

4
db.people.find({'gender': 'Male', 'state':'Arizona'})

5
db.people.find({'state': {'$in' : ['Arizona', 'New Mexico']}})

6
db.people.find({'age' : {'$lt': 40}})

7
db.people.count({'gender':'Female','state':'Florida', 'age': {'$gte': 40, '$lte': 45}})

8
db.people.find({'first_name': { $regex: /^H/}})

9
db.people.count({'state': 'Michigan'}.sort({first_name}))

10
db.people.find({'$or' : [{'state': 'Virginia'}, {'first_name': 'Virginia'}]})

11
db.people.count({'age': {'$lt': 30 }, {'first_name': 1, 'last_name':1})

12
db.people.find({'state':'Montana})

13
db.people.find({"email": {$regex: /.edu/}})