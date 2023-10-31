import React, { Component } from 'react'

export default class onesect extends Component {
  render() {
    return (
      <section>
        <div className='container mt-5'>
          <div className='row px-lg-5'>
            <div className='col-lg-12 feature p-4'>
              <h1 className='mt-5 pt-5 fw-bold fs-1'>A warn welcome!</h1>
              <p className='px-3 fs-4'>Bootstrap utility classes are
                used to create this jumbotron since the old
                component has been removed from the framework. Why
                create custom CSS when you can use utilities?</p>
              <button className='btn btn-primary fs-5'>Call to action</button>
            </div>
          </div>
        </div>
      </section>

    )
  }
}
