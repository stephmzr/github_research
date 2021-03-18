import React, { Component, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export class User extends Component {
  componentDidMount(){
    this.props.getUser(this.props.match.params.login);
  }

  static propTypes = {
    loading: PropTypes.bool,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired
  }
  
  render() {
    const { name, avatar_url, location, bio, company, blog, login, html_url, followers, following, public_repos, public_gists, hireable } = this.props.user;
    const { loading } = this.props;

    if (loading) return <Spinner />;

    return (
      <Fragment>
        <Link to='/' className='btn btn-2'>
          Back to search
        </Link>
        Hireable: {''}
        {hireable ? <i className="fas fa-check text-success" /> : <i className="fas fa-times-circle text-danger" /> }
        <div className="card grid-2">
          <div className="all-center">
            <img src={avatar_url} className="round_img" alt="" style={{ width: '150px' }} />
            <h1>{name}</h1>
            <p>Location: {location}</p>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>Bio</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <a href={html_url} className='btn btn-2 my-1'>Visit github profile</a>
            <ul>
              <li>
                {login && 
                  <Fragment>
                    <strong>Username:</strong> {login}
                  </Fragment>
                }
              </li>
              <li>
                {company && 
                  <Fragment>
                    <strong>Company:</strong> {company}
                  </Fragment>
                }
              </li>
              <li>
                {blog && 
                  <Fragment>
                    <strong>Website:</strong> {blog}
                  </Fragment>
                }
              </li>
            </ul>
          </div>
        </div>
        <div className="card text-center">
          <div className="badge badge-1">Followers: {followers}</div>
          <div className="badge badge-2">Following: {following}</div>
          <div className="badge badge-3">Public repos: {public_repos}</div>
          <div className="badge badge-4">Public gists: {public_gists}</div>  
        </div>
      </Fragment>
    )
  }
}

export default User