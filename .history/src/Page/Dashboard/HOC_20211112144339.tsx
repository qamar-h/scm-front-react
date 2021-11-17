import React, { ReactElement } from 'react';

export default function HOC(component: ReactElement)
{
    return (<>
    <div id="wrapper" className="wrapper bg-ash">
        <div className="navbar navbar-expand-md header-menu-one bg-light">
            <div className="nav-bar-header-one">
                <div className="header-logo">
                    <a href="index.html">
                        <img src="img/logo.png" alt="logo">
                    </a>
                </div>
                 <div className="toggle-button sidebar-toggle">
                    <button type="button" className="item-link">
                        <span className="btn-icon-wrap">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>
            <div className="d-md-none mobile-nav-bar">
               <button className="navbar-toggler pulse-animation" type="button" data-toggle="collapse" data-target="#mobile-navbar" aria-expanded="false">
                    <i className="far fa-arrow-alt-circle-down"></i>
                </button>
                <button type="button" className="navbar-toggler sidebar-toggle-mobile">
                    <i className="fas fa-bars"></i>
                </button>
            </div>
            <div className="header-main-menu collapse navbar-collapse" id="mobile-navbar">
                <ul className="navbar-nav">
                    <li className="navbar-item header-search-bar">
                        <div className="input-group stylish-input-group">
                            <span className="input-group-addon">
                                <button type="submit">
                                    <span className="flaticon-search" aria-hidden="true"></span>
                                </button>
                            </span>
                            <input type="text" className="form-control" placeholder="Find Something . . .">
                        </div>
                    </li>
                </ul>
                <ul className="navbar-nav">
                    <li className="navbar-item dropdown header-admin">
                        <a className="navbar-nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                            aria-expanded="false">
                            <div className="admin-title">
                                <h5 className="item-title">Stevne Zone</h5>
                                <span>Admin</span>
                            </div>
                            <div className="admin-img">
                                <img src="img/figure/admin.jpg" alt="Admin">
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="item-header">
                                <h6 className="item-title">Steven Zone</h6>
                            </div>
                            <div className="item-content">
                                <ul className="settings-list">
                                    <li><a href="#"><i className="flaticon-user"></i>My Profile</a></li>
                                    <li><a href="#"><i className="flaticon-list"></i>Task</a></li>
                                    <li><a href="#"><i className="flaticon-chat-comment-oval-speech-bubble-with-text-lines"></i>Message</a></li>
                                    <li><a href="#"><i className="flaticon-gear-loading"></i>Account Settings</a></li>
                                    <li><a href="login.html"><i className="flaticon-turn-off"></i>Log Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li className="navbar-item dropdown header-message">
                        <a className="navbar-nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                            aria-expanded="false">
                            <i className="far fa-envelope"></i>
                            <div className="item-title d-md-none text-16 mg-l-10">Message</div>
                            <span>5</span>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="item-header">
                                <h6 className="item-title">05 Message</h6>
                            </div>
                            <div className="item-content">
                                <div className="media">
                                    <div className="item-img bg-skyblue author-online">
                                        <img src="img/figure/student11.png" alt="img">
                                    </div>
                                    <div className="media-body space-sm">
                                        <div className="item-title">
                                            <a href="#">
                                                <span className="item-name">Maria Zaman</span> 
                                                <span className="item-time">18:30</span> 
                                            </a>  
                                        </div>
                                        <p>What is the reason of buy this item. 
                                        Is it usefull for me.....</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="item-img bg-yellow author-online">
                                        <img src="img/figure/student12.png" alt="img">
                                    </div>
                                    <div className="media-body space-sm">
                                        <div className="item-title">
                                            <a href="#">
                                                <span className="item-name">Benny Roy</span> 
                                                <span className="item-time">10:35</span> 
                                            </a>  
                                        </div>
                                        <p>What is the reason of buy this item. 
                                        Is it usefull for me.....</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="item-img bg-pink">
                                        <img src="img/figure/student13.png" alt="img">
                                    </div>
                                    <div className="media-body space-sm">
                                        <div className="item-title">
                                            <a href="#">
                                                <span className="item-name">Steven</span> 
                                                <span className="item-time">02:35</span> 
                                            </a>  
                                        </div>
                                        <p>What is the reason of buy this item. 
                                        Is it usefull for me.....</p>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="item-img bg-violet-blue">
                                        <img src="img/figure/student11.png" alt="img">
                                    </div>
                                    <div className="media-body space-sm">
                                        <div className="item-title">
                                            <a href="#">
                                                <span className="item-name">Joshep Joe</span> 
                                                <span className="item-time">12:35</span> 
                                            </a>  
                                        </div>
                                        <p>What is the reason of buy this item. 
                                        Is it usefull for me.....</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="navbar-item dropdown header-notification">
                        <a className="navbar-nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                            aria-expanded="false">
                            <i className="far fa-bell"></i>
                            <div className="item-title d-md-none text-16 mg-l-10">Notification</div>
                            <span>8</span>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="item-header">
                                <h6 className="item-title">03 Notifiacations</h6>
                            </div>
                            <div className="item-content">
                                <div className="media">
                                    <div className="item-icon bg-skyblue">
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <div className="media-body space-sm">
                                        <div className="post-title">Complete Today Task</div>
                                        <span>1 Mins ago</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="item-icon bg-orange">
                                        <i className="fas fa-calendar-alt"></i>
                                    </div>
                                    <div className="media-body space-sm">
                                        <div className="post-title">Director Metting</div>
                                        <span>20 Mins ago</span>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="item-icon bg-violet-blue">
                                        <i className="fas fa-cogs"></i>
                                    </div>
                                    <div className="media-body space-sm">
                                        <div className="post-title">Update Password</div>
                                        <span>45 Mins ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                     <li className="navbar-item dropdown header-language">
                        <a className="navbar-nav-link dropdown-toggle" href="#" role="button" 
                        data-toggle="dropdown" aria-expanded="false"><i className="fas fa-globe-americas"></i>EN</a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">English</a>
                            <a className="dropdown-item" href="#">Spanish</a>
                            <a className="dropdown-item" href="#">Franchis</a>
                            <a className="dropdown-item" href="#">Chiness</a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Header Menu Area End Here -->
        <!-- Page Area Start Here -->
        <div className="dashboard-page-one">
            <!-- Sidebar Area Start Here -->
            <div className="sidebar-main sidebar-menu-one sidebar-expand-md sidebar-color">
               <div className="mobile-sidebar-header d-md-none">
                    <div className="header-logo">
                        <a href="index.html"><img src="img/logo1.png" alt="logo"></a>
                    </div>
               </div>
                <div className="sidebar-menu-content">
                    <ul className="nav nav-sidebar-menu sidebar-toggle-view">
                        <li className="nav-item sidebar-nav-item">
                            <a href="#" className="nav-link"><i className="flaticon-dashboard"></i><span>Dashboard</span></a>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <a href="index.html" className="nav-link"><i className="fas fa-angle-right"></i>Admin</a>
                                </li>
                                <li className="nav-item">
                                    <a href="index3.html" className="nav-link"><i
                                            className="fas fa-angle-right"></i>Students</a>
                                </li>
                                <li className="nav-item">
                                    <a href="index4.html" className="nav-link"><i className="fas fa-angle-right"></i>Parents</a>
                                </li>
                                <li className="nav-item">
                                    <a href="index5.html" className="nav-link"><i
                                            className="fas fa-angle-right"></i>Teachers</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <a href="#" className="nav-link"><i className="flaticon-classmates"></i><span>Students</span></a>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <a href="all-student.html" className="nav-link"><i className="fas fa-angle-right"></i>All
                                        Students</a>
                                </li>
                                <li className="nav-item">
                                    <a href="student-details.html" className="nav-link"><i
                                            className="fas fa-angle-right"></i>Student Details</a>
                                </li>
                                <li className="nav-item">
                                    <a href="admit-form.html" className="nav-link"><i
                                            className="fas fa-angle-right"></i>Admission Form</a>
                                </li>
                                <li className="nav-item">
                                    <a href="student-promotion.html" className="nav-link"><i
                                            className="fas fa-angle-right"></i>Student Promotion</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <a href="#" className="nav-link"><i
                                    className="flaticon-multiple-users-silhouette"></i><span>Teachers</span></a>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <a href="all-teacher.html" className="nav-link"><i className="fas fa-angle-right"></i>All
                                        Teachers</a>
                                </li>
                                <li className="nav-item">
                                    <a href="teacher-details.html" className="nav-link"><i
                                            className="fas fa-angle-right"></i>Teacher Details</a>
                                </li>
                                <li className="nav-item">
                                    <a href="add-teacher.html" className="nav-link"><i className="fas fa-angle-right"></i>Add
                                        Teacher</a>
                                </li>
                                <li className="nav-item">
                                    <a href="teacher-payment.html" className="nav-link"><i
                                            className="fas fa-angle-right"></i>Payment</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <a href="#" className="nav-link"><i className="flaticon-couple"></i><span>Parents</span></a>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <a href="all-parents.html" className="nav-link"><i className="fas fa-angle-right"></i>All
                                        Parents</a>
                                </li>
                                <li className="nav-item">
                                    <a href="parents-details.html" className="nav-link"><i
                                            className="fas fa-angle-right"></i>Parents Details</a>
                                </li>
                                <li className="nav-item">
                                    <a href="add-parents.html" className="nav-link"><i className="fas fa-angle-right"></i>Add
                                        Parent</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <a href="#" className="nav-link"><i className="flaticon-books"></i><span>Library</span></a>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <a href="all-book.html" className="nav-link"><i className="fas fa-angle-right"></i>All
                                        Book</a>
                                </li>
                                <li className="nav-item">
                                    <a href="add-book.html" className="nav-link"><i className="fas fa-angle-right"></i>Add New
                                        Book</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <a href="#" className="nav-link"><i className="flaticon-technological"></i><span>Acconunt</span></a>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <a href="all-fees.html" className="nav-link"><i className="fas fa-angle-right"></i>All Fees
                                        Collection</a>
                                </li>
                                <li className="nav-item">
                                    <a href="all-expense.html" className="nav-link"><i
                                            className="fas fa-angle-right"></i>Expenses</a>
                                </li>
                                <li className="nav-item">
                                    <a href="add-expense.html" className="nav-link"><i className="fas fa-angle-right"></i>Add
                                        Expenses</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <a href="#" className="nav-link"><i
                                    className="flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler"></i><span>Class</span></a>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <a href="all-class.html" className="nav-link"><i className="fas fa-angle-right"></i>All
                                        Classes</a>
                                </li>
                                <li className="nav-item">
                                    <a href="add-class.html" className="nav-link"><i className="fas fa-angle-right"></i>Add New
                                        Class</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="all-subject.html" className="nav-link"><i
                                    className="flaticon-open-book"></i><span>Subject</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="class-routine.html" className="nav-link"><i className="flaticon-calendar"></i><span>Class
                                    Routine</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="student-attendence.html" className="nav-link"><i
                                    className="flaticon-checklist"></i><span>Attendence</span></a>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <a href="#" className="nav-link"><i className="flaticon-shopping-list"></i><span>Exam</span></a>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <a href="exam-schedule.html" className="nav-link"><i className="fas fa-angle-right"></i>Exam
                                        Schedule</a>
                                </li>
                                <li className="nav-item">
                                    <a href="exam-grade.html" className="nav-link"><i className="fas fa-angle-right"></i>Exam
                                        Grades</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="transport.html" className="nav-link"><i
                                    className="flaticon-bus-side-view"></i><span>Transport</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="hostel.html" className="nav-link"><i className="flaticon-bed"></i><span>Hostel</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="notice-board.html" className="nav-link"><i
                                    className="flaticon-script"></i><span>Notice</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="messaging.html" className="nav-link"><i
                                    className="flaticon-chat"></i><span>Messeage</span></a>
                        </li>
                        <li className="nav-item sidebar-nav-item">
                            <a href="#" className="nav-link"><i className="flaticon-menu-1"></i><span>UI Elements</span></a>
                            <ul className="nav sub-group-menu">
                                <li className="nav-item">
                                    <a href="notification-alart.html" className="nav-link"><i className="fas fa-angle-right"></i>Alart</a>
                                </li>
                                <li className="nav-item">
                                    <a href="button.html" className="nav-link"><i className="fas fa-angle-right"></i>Button</a>
                                </li>
                                <li className="nav-item">
                                    <a href="grid.html" className="nav-link"><i className="fas fa-angle-right"></i>Grid</a>
                                </li>
                                <li className="nav-item">
                                    <a href="modal.html" className="nav-link"><i className="fas fa-angle-right"></i>Modal</a>
                                </li>
                                <li className="nav-item">
                                    <a href="progress-bar.html" className="nav-link"><i className="fas fa-angle-right"></i>Progress Bar</a>
                                </li>
                                <li className="nav-item">
                                    <a href="ui-tab.html" className="nav-link"><i className="fas fa-angle-right"></i>Tab</a>
                                </li>
                                <li className="nav-item">
                                    <a href="ui-widget.html" className="nav-link"><i
                                            className="fas fa-angle-right"></i>Widget</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="map.html" className="nav-link"><i
                                    className="flaticon-planet-earth"></i><span>Map</span></a>
                        </li>
                        <li className="nav-item">
                            <a href="account-settings.html" className="nav-link"><i
                                    className="flaticon-settings"></i><span>Account</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Sidebar Area End Here -->
            <div className="dashboard-content-one">
                <!-- Breadcubs Area Start Here -->
                <div className="breadcrumbs-area">
                    <h3>Admin Dashboard</h3>
                    <ul>
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>Admin</li>
                    </ul>
                </div>
                <!-- Breadcubs Area End Here -->
                <!-- Dashboard summery Start Here -->
                <div className="row gutters-20">
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-green ">
                                        <i className="flaticon-classmates text-green"></i>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Students</div>
                                        <div className="item-number"><span className="counter" data-num="150000">1,50,000</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-blue">
                                        <i className="flaticon-multiple-users-silhouette text-blue"></i>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Teachers</div>
                                        <div className="item-number"><span className="counter" data-num="2250">2,250</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-yellow">
                                        <i className="flaticon-couple text-orange"></i>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Parents</div>
                                        <div className="item-number"><span className="counter" data-num="5690">5,690</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="dashboard-summery-one mg-b-20">
                            <div className="row align-items-center">
                                <div className="col-6">
                                    <div className="item-icon bg-light-red">
                                        <i className="flaticon-money text-red"></i>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="item-content">
                                        <div className="item-title">Earnings</div>
                                        <div className="item-number"><span>$</span><span className="counter" data-num="193000">1,93,000</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Dashboard summery End Here -->
                <!-- Dashboard Content Start Here -->
                <div className="row gutters-20">
                    <div className="col-12 col-xl-8 col-6-xxxl">
                        <div className="card dashboard-card-one pd-b-20">
                            <div className="card-body">
                                <div className="heading-layout1">
                                    <div className="item-title">
                                        <h3>Earnings</h3>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                            aria-expanded="false">...</a>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-times text-orange-red"></i>Close</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="earning-report">
                                    <div className="item-content">
                                        <div className="single-item pseudo-bg-blue">
                                            <h4>Total Collections</h4>
                                            <span>75,000</span>
                                        </div>
                                        <div className="single-item pseudo-bg-red">
                                            <h4>Fees Collection</h4>
                                            <span>15,000</span>
                                        </div>
                                    </div>
                                    <div className="dropdown">
                                        <a className="date-dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                            aria-expanded="false">Jan 20, 2019</a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#">Jan 20, 2019</a>
                                            <a className="dropdown-item" href="#">Jan 20, 2021</a>
                                            <a className="dropdown-item" href="#">Jan 20, 2020</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="earning-chart-wrap">
                                    <canvas id="earning-line-chart" width="660" height="320"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-3-xxxl">
                        <div className="card dashboard-card-two pd-b-20">
                            <div className="card-body">
                                <div className="heading-layout1">
                                    <div className="item-title">
                                        <h3>Expenses</h3>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                            aria-expanded="false">...</a>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-times text-orange-red"></i>Close</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="expense-report">
                                    <div className="monthly-expense pseudo-bg-Aquamarine">
                                        <div className="expense-date">Jan 2019</div>
                                        <div className="expense-amount"><span>$</span> 15,000</div>
                                    </div>
                                    <div className="monthly-expense pseudo-bg-blue">
                                        <div className="expense-date">Feb 2019</div>
                                        <div className="expense-amount"><span>$</span> 10,000</div>
                                    </div>
                                    <div className="monthly-expense pseudo-bg-yellow">
                                        <div className="expense-date">Mar 2019</div>
                                        <div className="expense-amount"><span>$</span> 8,000</div>
                                    </div>
                                </div>
                                <div className="expense-chart-wrap">
                                    <canvas id="expense-bar-chart" width="100" height="300"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6 col-3-xxxl">
                        <div className="card dashboard-card-three pd-b-20">
                            <div className="card-body">
                                <div className="heading-layout1">
                                    <div className="item-title">
                                        <h3>Students</h3>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                            aria-expanded="false">...</a>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-times text-orange-red"></i>Close</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="doughnut-chart-wrap">
                                    <canvas id="student-doughnut-chart" width="100" height="300"></canvas>
                                </div>
                                <div className="student-report">
                                    <div className="student-count pseudo-bg-blue">
                                        <h4 className="item-title">Female Students</h4>
                                        <div className="item-number">45,000</div>
                                    </div>
                                    <div className="student-count pseudo-bg-yellow">
                                        <h4 className="item-title">Male Students</h4>
                                        <div className="item-number">1,05,000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-xl-6 col-4-xxxl">
                        <div className="card dashboard-card-four pd-b-20">
                            <div className="card-body">
                                <div className="heading-layout1">
                                    <div className="item-title">
                                        <h3>Event Calender</h3>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                            aria-expanded="false">...</a>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-times text-orange-red"></i>Close</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="calender-wrap">
                                    <div id="fc-calender" className="fc-calender"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-4-xxxl">
                        <div className="card dashboard-card-five pd-b-20">
                            <div className="card-body pd-b-14">
                                <div className="heading-layout1">
                                    <div className="item-title">
                                        <h3>Website Traffic</h3>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                            aria-expanded="false">...</a>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-times text-orange-red"></i>Close</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="traffic-title">Unique Visitors</h6>
                                <div className="traffic-number">2,590</div>
                                <div className="traffic-bar">
                                    <div className="direct" data-toggle="tooltip" data-placement="top" title="Direct">
                                    </div>
                                    <div className="search" data-toggle="tooltip" data-placement="top" title="Search">
                                    </div>
                                    <div className="referrals" data-toggle="tooltip" data-placement="top" title="Referrals">
                                    </div>
                                    <div className="social" data-toggle="tooltip" data-placement="top" title="Social">
                                    </div>
                                </div>
                                <div className="traffic-table table-responsive">
                                    <table className="table">
                                        <tbody>
                                            <tr>
                                                <td className="t-title pseudo-bg-Aquamarine">Direct</td>
                                                <td>12,890</td>
                                                <td>50%</td>
                                            </tr>
                                            <tr>
                                                <td className="t-title pseudo-bg-blue">Search</td>
                                                <td>7,245</td>
                                                <td>27%</td>
                                            </tr>
                                            <tr>
                                                <td className="t-title pseudo-bg-yellow">Referrals</td>
                                                <td>4,256</td>
                                                <td>8%</td>
                                            </tr>
                                            <tr>
                                                <td className="t-title pseudo-bg-red">Social</td>
                                                <td>500</td>
                                                <td>7%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xl-6 col-4-xxxl">
                        <div className="card dashboard-card-six pd-b-20">
                            <div className="card-body">
                                <div className="heading-layout1 mg-b-17">
                                    <div className="item-title">
                                        <h3>Notice Board</h3>
                                    </div>
                                    <div className="dropdown">
                                        <a className="dropdown-toggle" href="#" role="button" data-toggle="dropdown"
                                            aria-expanded="false">...</a>

                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-times text-orange-red"></i>Close</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-cogs text-dark-pastel-green"></i>Edit</a>
                                            <a className="dropdown-item" href="#"><i
                                                    className="fas fa-redo-alt text-orange-peel"></i>Refresh</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="notice-box-wrap">
                                    <div className="notice-list">
                                        <div className="post-date bg-skyblue">16 June, 2019</div>
                                        <h6 className="notice-title"><a href="#">Great School manag mene esom text of the
                                                printing.</a></h6>
                                        <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                                    </div>
                                    <div className="notice-list">
                                        <div className="post-date bg-yellow">16 June, 2019</div>
                                        <h6 className="notice-title"><a href="#">Great School manag printing.</a></h6>
                                        <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                                    </div>
                                    <div className="notice-list">
                                        <div className="post-date bg-pink">16 June, 2019</div>
                                        <h6 className="notice-title"><a href="#">Great School manag meneesom.</a></h6>
                                        <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                                    </div>
                                    <div className="notice-list">
                                        <div className="post-date bg-skyblue">16 June, 2019</div>
                                        <h6 className="notice-title"><a href="#">Great School manag mene esom text of the
                                                printing.</a></h6>
                                        <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                                    </div>
                                    <div className="notice-list">
                                        <div className="post-date bg-yellow">16 June, 2019</div>
                                        <h6 className="notice-title"><a href="#">Great School manag printing.</a></h6>
                                        <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                                    </div>
                                    <div className="notice-list">
                                        <div className="post-date bg-pink">16 June, 2019</div>
                                        <h6 className="notice-title"><a href="#">Great School manag meneesom.</a></h6>
                                        <div className="entry-meta"> Jennyfar Lopez / <span>5 min ago</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Dashboard Content End Here -->
                <!-- Social Media Start Here -->
                <div className="row gutters-20">
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="card dashboard-card-seven">
                            <div className="social-media bg-fb hover-fb">
                                <div className="media media-none--lg">
                                    <div className="social-icon">
                                        <i className="fab fa-facebook-f"></i>
                                    </div>
                                    <div className="media-body space-sm">
                                        <h6 className="item-title">Like us on facebook</h6>
                                    </div>
                                </div>
                                <div className="social-like">30,000</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="card dashboard-card-seven">
                            <div className="social-media bg-twitter hover-twitter">
                                <div className="media media-none--lg">
                                        <div className="social-icon">
                                        <i className="fab fa-twitter"></i>
                                        </div>
                                        <div className="media-body space-sm">
                                            <h6 className="item-title">Follow us on twitter</h6>
                                        </div>
                                </div>
                                <div className="social-like">1,11,000</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="card dashboard-card-seven">
                            <div className="social-media bg-gplus hover-gplus">
                                <div className="media media-none--lg">
                                    <div className="social-icon">
                                        <i className="fab fa-google-plus-g"></i>
                                    </div>
                                    <div className="media-body space-sm">
                                        <h6 className="item-title">Follow us on googleplus</h6>
                                    </div>
                                </div>
                                <div className="social-like">19,000</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6 col-12">
                        <div className="card dashboard-card-seven">
                            <div className="social-media bg-linkedin hover-linked">
                                <div className="media media-none--lg">
                                    <div className="social-icon">
                                    <i className="fab fa-linkedin-in"></i>
                                    </div>
                                    <div className="media-body space-sm">
                                        <h6 className="item-title">Follow us on linked</h6>
                                    </div>
                                </div>
                                <div className="social-like">45,000</div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Social Media End Here -->
                <!-- Footer Area Start Here -->
                <footer className="footer-wrap-layout1">
                    <div className="copyright">© Copyrights <a href="#">akkhor</a> 2019. All rights reserved. Designed by <a
                            href="#">PsdBosS</a></div>
                </footer>
                <!-- Footer Area End Here -->
            </div>
        </div>
        <!-- Page Area End Here -->
    </div>
    </>)
}