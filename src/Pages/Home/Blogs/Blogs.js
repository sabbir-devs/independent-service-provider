import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div className="blogs">
      <div className="blog">
        <h2>Difference between authorization and authentication</h2>
        <p>
          Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. Both Authentication and Authorization area unit utilized in respect of knowledge security that permits the safety on an automatic data system. Each area unit terribly crucial topics usually related to the online as key items of its service infrastructure. However, each the terms area unit terribly completely different with altogether different ideas. whereas it's true that they're usually employed in an equivalent context with an equivalent tool, they're utterly distinct from one another. In authentication process, the identity of users are checked for providing the access to the system. While in authorization process, person's or user's authorities are checked for accessing the resources. Authentication is done before the authorization process, whereas authorization process is done after the authentication
          process.
        </p>
      </div>
      <div className="blog">
          <h2>Why are you using firebase? What other options do you have to implement authentication?</h2>
          <p>Firebase by Google can be used for the following: Firebase manages all data real-time in the database. So, the exchange of data to and fro from the database is easy and quick. Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
          <h2>5 Common Authentication Types</h2>
          <ul style={{marginLeft:'20px'}}>
            <li>Password-based authentication</li>
            <li>Multi-factor authentication</li>
            <li>Certificate-based authentication</li>
            <li>Biometric authentication</li>
            <li>Token-based authentication</li>
          </ul>
      </div>
      <div className="blog">
          <h2>What other services does firebase provide other than authentication</h2>
          <h4>There are many services which Firebase provides, Most useful of them are:</h4>
          <ul style={{marginLeft:'20px'}}>
            <li>Cloud Firestore</li>
            <li>Cloud Functions</li>
            <li>Authentication</li>
            <li>Hosting</li>
            <li>Cloud Storage</li>
            <li>Google Analytics</li>
            <li>Predictions</li>
            <li>Cloud Messaging</li>
            <li>Dynamic Links</li>
            <li>Remote Config</li>
          </ul>
      </div>
    </div>
  );
};

export default Blogs;
