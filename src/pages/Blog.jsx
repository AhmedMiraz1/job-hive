import { FaArrowAltCircleRight } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="my-24 ">
      <div className="my-8 shadow-lg p-3 space-y-4">
      <h1 className="text-purple-500 text-xl md:text-2xl lg:text-3xl">What is an Access Token?</h1>
      <p className="flex gap-3 text-lg md:text-xl font-sans text-gray-500">
        {" "}
        <FaArrowAltCircleRight className="text-3xl text-green-500" />
        An access token is a credential used to authenticate a user and
        authorize access to a resource, typically issued by an authentication
        server (such as OAuth or OpenID Connect). This token is included in the
        headers of API requests to validate the user identity and permissions.
        Access tokens are usually short-lived, expiring after a predefined
        period to enhance security.
      </p>
      </div>

     <div className="my-8 shadow-lg p-3 space-y-4">
     <h1 className="text-purple-500 text-xl md:text-2xl lg:text-3xl">What is a Refresh Token?</h1>
      <p className="flex gap-3 text-lg md:text-xl font-sans text-gray-500"> <FaArrowAltCircleRight className="text-3xl text-green-500" />
        A refresh token complements the access token by allowing an application
        to obtain a new access token without requiring the user to
        reauthenticate. Refresh tokens are typically long-lived and can be
        exchanged for a new access token when the original access token expires.
        This mechanism helps maintain a seamless user experience without
        frequent logins.
      </p>
     </div>
      <div  className="my-8 shadow-lg p-3 space-y-4">
      <h2 className="text-purple-500 text-xl md:text-2xl lg:text-3xl">How Do They Work?</h2>
      <ul className="text-gray-500">
        <li className=" text-base md:text-lg font-sans" >
          <span className="text-xl md:text-2xl text-green-700 ">1. User Authentication:</span> When a user logs in, the
          authentication server verifies their credentials and issues an access
          token and a refresh token.
        </li >
        <li  className=" text-base md:text-lg font-sans">
          <span className="text-xl md:text-2xl text-green-700 ">2. Access Token Usage:</span> The client application includes
          the access token in the headers of API requests to authenticate and
          authorize actions.
        </li>
        <li className=" text-base md:text-lg font-sans">
          <span className="text-xl md:text-2xl text-green-700 ">3. Token Expiry:</span> Once the access token expires, the
          client application can use the refresh token to request a new access
          token from the authentication server.
        </li>
        <li className=" text-base md:text-lg font-sans">
          <span  className="text-xl md:text-2xl text-green-700 ">4. Token Renewal:</span> The authentication server validates the
          refresh token and issues a new access token, along with possibly a new
          refresh token.
        </li>
      </ul>
      </div>

     <div className="my-8 shadow-lg p-3 space-y-4">
     <h2 className="text-purple-500 text-xl md:text-2xl lg:text-3xl">Where Should We Store Them on the Client Side?</h2>
      <p className="flex gap-3 text-lg md:text-xl font-sans text-gray-500"> <FaArrowAltCircleRight className="text-3xl text-green-500" />
        Storing tokens securely on the client side is crucial to prevent
        unauthorized access. Here are the recommended practices:
      </p>
      <ul className="text-gray-500">
        <li className=" text-base md:text-lg font-sans">
          <span  className="text-xl md:text-2xl text-green-700 ">1. Access Token:</span> Store it in memory (e.g., JavaScript
          variable) to reduce the risk of it being accessed by malicious
          scripts. Ensure it is sent only over HTTPS connections..
        </li>
        <li className=" text-base md:text-lg font-sans">
          <span  className="text-xl md:text-2xl text-green-700 ">2. Refresh Token:</span> Store it in a more persistent and
          secure storage, such as HTTP-only cookies, to protect it from XSS
          attacks. Avoid storing it in localStorage or sessionStorage, as these
          are vulnerable to XSS attacks
        </li>
      </ul>
     </div>

      <div  className="my-8 shadow-lg p-3 space-y-4">
      <h1 className="text-purple-500 text-xl md:text-2xl lg:text-3xl">What is Express.js?</h1>
      <p className="flex gap-3 text-lg md:text-xl font-sans text-gray-500" > <FaArrowAltCircleRight className=" text-green-500" />
        Express.js is a minimal and flexible Node.js web application framework
        that provides robust features for building web and mobile applications.
        It simplifies the development of server-side applications by offering a
        thin layer of fundamental web application features without obscuring
        Node.js features.
      </p>

      <h3 className="text-purple-500 text-xl md:text-2xl lg:text-3xl">Key Features of Express.js:</h3>
      <li className=" text-base md:text-lg font-sans text-gray-500">
        <span className="text-xl md:text-2xl text-green-700 ">Middleware:</span> Facilitates request processing pipelines by
        chaining middleware functions.
      </li>
      <li className=" text-base md:text-lg font-sans text-gray-500">
        <span className="text-xl md:text-2xl text-green-700 ">Routing:</span> Simplifies the handling of different HTTP requests
        at different URL paths.
      </li>
      <li className=" text-base md:text-lg font-sans text-gray-500">
        <span className="text-xl md:text-2xl text-green-700 ">Performance:</span> Lightweight and fast, suitable for
        high-performance applications. Flexibility: Allows developers to
        structure their applications as they see fit, without imposing specific
        patterns.
      </li>
      </div>

      <div className="my-8 shadow-lg p-3 space-y-4">
        <h1 className="text-purple-500 text-xl md:text-2xl lg:text-3xl">What is NestJS?</h1>
        <p className="flex gap-3 text-lg md:text-xl font-sans text-gray-500">
        <FaArrowAltCircleRight className="text-3xl text-green-500" />
          NestJS is a progressive Node.js framework for building efficient,
          reliable, and scalable server-side applications. Built with TypeScript
          (and fully supporting JavaScript), it incorporates concepts from
          Object-Oriented Programming (OOP), Functional Programming (FP), and
          Functional Reactive Programming (FRP).
        </p>
        <h3 className="text-purple-500 text-xl md:text-2xl ">Key Features of NestJS:</h3>
        <li className=" text-base md:text-lg font-sans text-gray-500">
          <span className="text-xl md:text-2xl text-green-700 "> Modular Architecture:</span> Promotes the use of modules to
          organize and manage code, improving maintainability and scalability.
        </li>
        <li className=" text-base md:text-lg font-sans text-gray-500">
          <span className="text-xl md:text-2xl text-green-700 ">Dependency Injection:</span> Leverages a powerful dependency
          injection system to manage the instantiation and lifecycle of
          components.
        </li>
        <li className=" text-base md:text-lg font-sans text-gray-500">
          <span className="text-xl md:text-2xl text-green-700 ">Extensibility:</span> Easily integrates with various libraries
          and tools, including TypeORM, Mongoose, and GraphQL.
        </li>
        <li className=" text-base md:text-lg font-sans text-gray-500">
          <span className="text-xl md:text-2xl text-green-700 ">Built-in Support for Microservices:</span> Facilitates the
          development of microservice architectures out of the box.
        </li>
        <li className=" text-base md:text-lg font-sans text-gray-500">
          <span className="text-xl md:text-2xl text-green-700 ">TypeScript:</span> Strongly typed language support, enhancing
          code quality and developer productivity.
        </li>
        <p className="flex gap-3 text-lg md:text-xl font-sans text-gray-500">
        <FaArrowAltCircleRight className="text-3xl text-green-500" />
          NestJS stands out by combining the best practices of many modern
          programming paradigms, making it an excellent choice for developing
          complex and scalable server-side applications.
        </p>
      </div>
      <div className="my-8 shadow-lg p-3 space-y-4" >
        <h2 className="text-purple-500 text-xl md:text-2xl ">Conclusion</h2>
        <p className="flex gap-3 text-lg md:text-xl font-sans text-gray-500">
        <FaArrowAltCircleRight className="text-3xl text-green-500" />
          Access tokens and refresh tokens are essential tools in modern web
          authentication, enhancing security and user experience. Proper storage
          on the client side is critical to prevent security vulnerabilities.
          Express.js offers a minimalist approach to building web applications,
          while NestJS provides a comprehensive framework that leverages
          TypeScript and modular architecture to develop robust server-side
          applications. Both frameworks serve different needs and can be chosen
          based on the project requirements and developer preferences.
        </p>
      </div>
    </div>
  );
};

export default Blog;
