import instance from './instance'
import users from './users'
import points from './points'

export default {
    users: users(instance),
    points: points(instance)
}