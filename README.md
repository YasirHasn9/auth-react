## Authentication

in simple terms, services require the client to provide a proof they have authenticated with.

- How can the client provide a proof?

- overview : the server don't remember anything about the client after each interaction, this is why we need something to make the server remembers us. we can use small pieces of information called cookies that issued by the browser to store state information.
  But modern web use json web token (JWT) which issued by the server. They are string cryptic text which can be stored on the client side using local storage of session storage.

- How does it work?
  a common pattern for a login point to exit is to take payload of username and password
  the client create an account the sever will issue the toke
  the client will login, the server will try to match the credentials, if the they are match
  the server will send that token to the front-end and from then on, it the front-end responsibility to deal with
