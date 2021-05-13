# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

course = Course.create(title: 'Hello', description: 'Create a react app with ruby on rails')

section = Section.create(title: 'Chapter 1', course: course)

episodes = Episode.create([
  {
  title: '1. Setting up a new Ruby on Rails App with React',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas consequuntur maxime natus dolor doloribus dolores consequatur repellat, numquam rerum.', url: 'https://www.youtube.com/embed/dsPsJY54afw', section: section
  },
{
  title: '2. Adding React to an Existing Rails App',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas consequuntur maxime natus dolor doloribus dolores consequatur repellat, numquam rerum.', url: 'https://www.youtube.com/embed/dsPsJY54afw', section: section
},
{
  title: '3. Building a Hello World App',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas consequuntur maxime natus dolor doloribus dolores consequatur repellat, numquam rerum.', url: 'https://www.youtube.com/embed/dsPsJY54afw', section: section
},
{
  title: '4. Adding React Router Dom to your App',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas consequuntur maxime natus dolor doloribus dolores consequatur repellat, numquam rerum.', url: 'https://www.youtube.com/embed/dsPsJY54afw', section: section
}
])