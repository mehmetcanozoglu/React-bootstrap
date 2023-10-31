import React, { Component } from 'react'

export default class Twosect extends Component {
    render() {
        return (
            <section className='twosect'>
                <div className='container'>
                    <div className='row my-5'>
                        <div className='col-xl-4 col-md-6 mb-5 feature'>
                            <div className='px-5 feature'>
                                <i className='bi bi-collection fs-1 rounded-3 py-2 px-3 text-white bg-primary'></i>
                                <h3 className='m-4 fw-bold'>Fresh new layout</h3>
                                <p className='px-5'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-5 '>
                            <div className='feature'>
                                <i className='bi bi-cloud-download fs-1 rounded-3 py-2 px-3 text-white bg-primary'></i>
                                <h3 className='m-4 fw-bold'>Fresh new layout</h3>
                                <p className='px-5'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-5 '>
                            <div className='feature'>
                                <i className='bi bi-card-heading fs-1 rounded-3 py-2 px-3 text-white bg-primary'></i>
                                <h3 className='m-4 fw-bold'>Fresh new layout</h3>
                                <p className='px-5'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-5 '>
                            <div className='feature'>
                                <i className='bi bi-bootstrap fs-1 rounded-3 py-2 px-3 text-white bg-primary'></i>
                                <h3 className='m-4 fw-bold'>Fresh new layout</h3>
                                <p className='px-5'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-5 '>
                            <div className='feature'>
                                <i className='bi bi-code fs-1 rounded-3 py-2 px-3 text-white bg-primary'></i>
                                <h3 className='m-4 fw-bold'>Fresh new layout</h3>
                                <p className='px-5'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                        </div>

                        <div className='col-xl-4 col-md-6 mb-5 '>
                            <div className='feature'>
                                <i className='bi bi-patch-check fs-1 rounded-3 py-2 px-3 text-white bg-primary'></i>
                                <h3 className='m-4 fw-bold'>Fresh new layout</h3>
                                <p className='px-5'>With Bootstrap 5, we've created a fresh new layout for this template!</p>
                            </div>
                        </div>

                    </div>
                </div>
                <footer class="py-5 bg-dark">
                    <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
                </footer>
            </section>

        )
    }
}
