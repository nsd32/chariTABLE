import React, { Component } from 'react';

class Profile extends Component {
	

  render() {
    return(
      <div>
        
        {/*<div id="ms-preload" class="ms-preload">
          <div id="status">
            <div class="spinner">
              <div class="dot1"></div>
              <div class="dot2"></div>
            </div>
          </div>
        </div>*/}
        <div class="bg-full-page ms-hero-img-coffee ms-hero-bg-primary ms-bg-fixed back-fixed">

          <header class="ms-header ms-header-primary">
            <div class="container container-full">
              <div class="ms-title">
                <a href="index.html">
                  
                  <span class="ms-logo animated zoomInDown animation-delay-5">CH</span>
                  <h1 class="animated fadeInRight animation-delay-6">chariTABLE Host
                  </h1>
                </a>
              </div>
              <div class="header-right">
                <div class="share-menu">
                  <ul class="share-menu-list">
                    <li class="animated fadeInRight animation-delay-3">
                      <a href="javascript:void(0)" class="btn-circle btn-google">
                        <i class="zmdi zmdi-google"></i>
                      </a>
                    </li>
                    <li class="animated fadeInRight animation-delay-2">
                      <a href="javascript:void(0)" class="btn-circle btn-facebook">
                        <i class="zmdi zmdi-facebook"></i>
                      </a>
                    </li>
                    <li class="animated fadeInRight animation-delay-1">
                      <a href="javascript:void(0)" class="btn-circle btn-twitter">
                        <i class="zmdi zmdi-twitter"></i>
                      </a>
                    </li>
                  </ul>
                  <a href="javascript:void(0)" class="btn-circle btn-circle-primary animated zoomInDown animation-delay-7">
                    <i class="zmdi zmdi-share"></i>
                  </a>
                </div>
                <a href="javascript:void(0)" class="btn-circle btn-circle-primary no-focus animated zoomInDown animation-delay-8" data-toggle="modal" data-target="#ms-account-modal">
                  <i class="zmdi zmdi-account"></i>
                </a>
                <form class="search-form animated zoomInDown animation-delay-9">
                  <input id="search-box" type="text" class="search-input" placeholder="Search..." name="q" />
                  <label for="search-box">
                    <i class="zmdi zmdi-search"></i>
                  </label>
                </form>
              </div>
            </div>
          </header>

          <div class="absolute-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-6">
                  <div class="card card-flat bg-transparent">
                    <div class="card-block color-white">
                      <header class="text-center mb-2">
                        <span class="ms-logo ms-logo-lg ms-logo-white center-block mb-2 animated zoomInDown animation-delay-5">M</span>
                        <h1 class="no-m ms-site-title color-white center-block ms-site-title-lg mt-2 animated zoomInDown animation-delay-5">Material
                          <span>Style</span>
                        </h1>
                        <p class="lead lead-xl mt-2 animated fadeInUp animation-delay-7">Odio temporibus officiis, mollitia fuga velit vel dolor, perferendis, accusantium error asperiores quam id cupiditate.</p>
                      </header>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="text-center card-block animated zoomIn animation-delay-10">
                            <span class="btn-circle btn-circle-raised btn-circle-white btn-circle-xlg color-warning">
                              <i class="zmdi zmdi-cloud-outline"></i>
                            </span>
                            <h4 class="color-white">Cloud Service</h4>
                            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="javascript:void(0)" class="btn btn-white color-warning btn-raised">
                              <i class="zmdi zmdi-download"></i> Get Now</a>
                          </div>
                        </div>
                        <div class="col-sm-6">
                          <div class="text-center card-block animated zoomIn animation-delay-10">
                            <span class="btn-circle btn-circle-raised btn-circle-white btn-circle-xlg color-info">
                              <i class="zmdi zmdi-card"></i>
                            </span>
                            <h4 class="color-white">Secure Payment</h4>
                            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            <a href="javascript:void(0)" class="btn btn-white color-info btn-raised">
                              <i class="zmdi zmdi-info"></i> More info</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6">
                  <div class="card index-1 animated zoomInRight animation-delay-7">
                    <div class="card-block-big">
                      <h1 class="color-primary">Register</h1>
                      <hr style={{height:"10px", visibility:"hidden"}} />
                      <form>
                        <div class="form-group label-floating mt-2 mb-1">
                          <div class="input-group center-block">
                            <label class="control-label" for="ms-subscribe">
                              <i class="zmdi zmdi-email"></i> Full Name</label>
                            <input type="email" id="ms-subscribe" class="form-control" /> </div>
                        </div>
                        <div class="form-group label-floating mt-2 mb-1">
                          <div class="input-group center-block">
                            <label class="control-label" for="ms-subscribe">
                              <i class="zmdi zmdi-email"></i> Email Adress</label>
                            <input type="email" id="ms-subscribe" class="form-control" /> </div>
                        </div>
                        <button class="btn btn-raised btn-primary btn-block" type="button">Register</button>
                        <h3>Can't make it?</h3>
                        <p>Enter your name above and click Donate now to help TABLEHOST NAME meet their goal.</p>
                        <button class="btn btn-raised btn-success btn-block" type="button">Donate</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <p class="lead lead-sm text-center mt-4 color-medium animated fadeInUp animation-delay-16">Material Style &copy; Copyright 2016</p>
            </div>
          </div>
        </div>
        <script src="assets/js/plugins.min.js"></script>
        <script src="assets/js/app.min.js"></script>
        <script src="assets/js/coming.js"></script>
        
      </div>
    );
  }
}

export default Profile;