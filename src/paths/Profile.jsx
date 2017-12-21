import React, { Component } from 'react';

class Profile extends Component {
	

  render() {
    return(
      <div>
        <div class="ms-site-container">
          <header class="ms-header ms-header-primary">
            
            <div class="container container-full">
              <div class="ms-title">
                <a href="index.html">
                  
                  <span class="ms-logo animated zoomInDown animation-delay-5">CH</span>
                  <h1 class="animated fadeInRight animation-delay-6">chariTABLE Host
                    <span>Style</span>
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
                <a href="javascript:void(0)" class="btn-ms-menu btn-circle btn-circle-primary ms-toggle-left animated zoomInDown animation-delay-10">
                  <i class="zmdi zmdi-menu"></i>
                </a>
              </div>
            </div>
          </header>

          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="row">
                  <div class="col-lg-12 col-md-6 order-md-1">
                    <div class="card animated fadeInUp animation-delay-7">
                      <div class="ms-hero-bg-primary ms-hero-img-coffee">
                        <h3 class="color-white index-1 text-center no-m pt-4">Victoria Smith</h3>
                        <div class="color-medium index-1 text-center np-m">@vic_smith</div>
                        <img src="assets/img/demo/avatar1.jpg" alt="..." class="img-avatar-circle" /> </div>
                      <div class="card-block pt-4 text-center">
                        <h3 class="color-primary">Bio</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudiandae beatae magni es magnam autem molestias.</p>
                        <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook">
                          <i class="zmdi zmdi-facebook"></i>
                        </a>
                        <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter">
                          <i class="zmdi zmdi-twitter"></i>
                        </a>
                        <a href="javascript:void(0)" class="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram">
                          <i class="zmdi zmdi-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-12 col-md-12 order-md-3 order-lg-2">
                    <a href="javascript:void(0)" class="btn btn-warning btn-raised btn-block animated fadeInUp animation-delay-12">
                      <i class="zmdi zmdi-edit"></i> Edit Profile</a>
                    <a href="javascript:void(0)" class="btn btn-danger btn-raised btn-block animated fadeInUp animation-delay-12">
                      <i class="zmdi zmdi-delete"></i> Delete User</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="card card-primary animated fadeInUp animation-delay-12">
                  <div class="card-header">
                    <h3 class="card-title">
                      <i class="zmdi zmdi-account-circle"></i> General Information</h3>
                  </div>
                  <table class="table table-no-border table-striped">
                    <tr>
                      <th>
                        <i class="zmdi zmdi-account mr-1 color-success"></i> User Name</th>
                      <td>vic_smith</td>
                    </tr>
                    <tr>
                      <th>
                        <i class="zmdi zmdi-face mr-1 color-warning"></i> Fullname</th>
                      <td>Victoria Smith</td>
                    </tr>
                    <tr>
                      <th>
                        <i class="zmdi zmdi-email mr-1 color-danger"></i> Email</th>
                      <td>
                        <a href="#">mail@example.com</a>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i class="zmdi zmdi-link mr-1 color-info"></i> Website</th>
                      <td>
                        <a href="#">www.example.com</a>
                      </td>
                    </tr>
                    <tr>
                      <th>
                        <i class="zmdi zmdi-calendar mr-1 color-royal"></i> Member Since</th>
                      <td>12/11/2015</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Profile;