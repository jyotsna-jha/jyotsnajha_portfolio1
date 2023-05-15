import "./WorkCardStyles.css";
import React from "react";
import { NavLink } from "react-router-dom";
import pro1 from "../assets/figma1.jpeg";
import pro2 from "../assets/figma4.png";
import pro3 from "../assets/web1.jpeg";
import pro4 from "../assets/web4.jpeg";
import pro5 from "../assets/web_new.jpeg";
import pro6 from "../assets/web5.jpeg";
import pro8 from "../assets/figmax.jpeg";
import pro56 from "../assets/figmas.jpeg";
const WorkCard = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects</h1>
      <div className="project-container">
        <div className="project-card">
          <img src={pro1} alt="screenshot of my project" />
          <h2 className="project-title">ToDo List UI Design</h2>
          <div className="pro-details">
            <p>
              The ToDo List UI Design project is a user interface design project
              that aims to enhance productivity by providing users with a clean
              and user-friendly interface to manage their daily tasks.
            </p>
            <div className="pro-btns">
              <NavLink to="" className="btn">
                view
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro2} alt="screenshot of my project" />
          <h2 className="project-title">Food App UI Design</h2>
          <div className="pro-details">
            <p>
              The "Food App UI Design for Seamless Food Ordering and Delivery"
              project is a user interface design project that aims to provide a
              seamless food ordering and delivery experience for users.
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://www.figma.com/file/LX3NvCneNwynsmw4ElRGef/Food-App?node-id=0%3A1&t=NiBx5nz3HqffP1NF-1"
                className="btn"
              >
                view
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro3} alt="screenshot of my project" />
          <h2 className="project-title">Blog Website Front-end</h2>
          <div className="pro-details">
            <p>
              I created this prototype website using Bootstrap to better
              understand how to use the framework's pre-designed components and
              responsive grid system.Bootstrap is an excellent tool for
              beginners who are new to web development and want to learn about
              responsive design and front-end frameworks. Building a prototype
              website with Bootstrap is a great way to develop your skills and
              knowledge in web development, especially if you're interested in
              front-end development and responsive design.
            </p>
          </div>
        </div>

        <div className="project-card">
          <img src={pro6} alt="screenshot of my project" />
          <h2 className="project-title">Predict Age</h2>
          <div className="pro-details">
            <p>
              The Predict Age app is a simple web application that uses the
              Fetch API in React js to predict a user's age based on their names
              they type. This sounds unrealistic but the goal to design this
              project was to better understand the concept of fetch API in React
              js. The Fetch API is an important concept in React js because it
              enables developers to retrieve data from an external API or server
              and integrate it into a React application.
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={pro5} alt="screenshot of my project" />
          <h2 className="project-title">ToDO'S</h2>
          <div className="pro-details">
            <p>
              The React js ToDO'S app is a simple web application that allows
              users to create, manage, and organize their tasks in a
              user-friendly interface. The app works by allowing users to add
              new tasks, mark tasks as completed, and delete tasks as needed.The
              user interface of the ToDO'S app consists of a single page with a
              form for adding new tasks, a list of tasks. When the user enters a
              new task and clicks the "Add Task" button, the app adds the task
              to the list and displays it to the user.When the user marks a task
              as completed, the app updates the status of the task and it turns
              green.When the user deletes a task, the app removes it from the
              list
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src={pro4} alt="screenshot of my project" />
          <h2 className="project-title">Portfolio</h2>
          <div className="pro-details">
            <p>
              Portfolio Website is a professional and polished online portfolio
              showcasing skills, experience, and accomplishments. The website's
              design is sleek, modern, and visually appealing, with a clean
              layout that makes it easy to navigate and find the desired
              information. The website is built using modern web technologies
              such as HTML, CSS. I created this prototype website using HTML,
              CSS to better understand how to use the Html tags and CSS flexbox,
              grid etc. HTML and CSS are essential tools for web designers,
              enabling them to create well-structured, visually appealing, and
              accessible web pages that deliver a positive user experience.
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://github.com/jyotsna-jha/my_portfolio"
                className="btn"
              >
                view
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro8} alt="screenshot of my project" />
          <h2 className="project-title">Travel App UI</h2>
          <div className="pro-details">
            <p>
              Travel app aims to provide users with a seamless and intuitive
              experience while planning and organizing their travel adventures.
              With a user-friendly interface and robust features, our app will
              revolutionize the way people explore and plan their trips.
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://www.figma.com/file/doTJfhSs6mOcoDFa0jAJC8/Travel-App?type=design&node-id=0%3A1&t=n0QoOSAaMvy97ic5-1"
                className="btn"
              >
                view
              </NavLink>
            </div>
          </div>
        </div>

        <div className="project-card">
          <img src={pro56} alt="screenshot of my project" />
          <h2 className="project-title">Shopping App Ui</h2>
          <div className="pro-details">
            <p>
              The primary goal is to provide users with an intuitive and
              visually appealing shopping experience, facilitating their
              browsing, selection, and purchase of products. This project seeks
              to transform the existing shopping app UI design into a fully
              functional mobile application
            </p>
            <div className="pro-btns">
              <NavLink
                to="https://www.figma.com/file/l0cKRq9gUVZWN19UDchRbO/Shopping-App?type=design&node-id=0%3A1&t=DSzvtl1NfV1spQo9-1"
                className="btn"
              >
                view
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

