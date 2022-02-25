# Goal

Learn how to connect React app to the backend.

# Planning
https://whimsical.com/ironmaidensbnb-MVw1gkTJrekF2QTaEKCMJU

## Components/Routes

<NavBar />

path="/"
  <HomePage />

path="/apartments"
  <ApartmentsList />
  --> call API (GET /apartments )
  --> display links for each apartment


path="/apartments/42"
  <ApartmentsDetails />
  --> call API   (GET /apartments/42 )
  --> display aparment details

path="/apartments/create"
  <CreateApartment />
  --> form (controlled component)
  --> call API   (POST /apartments + body)

  ## backlog
- [ ] Store API baseUrl in .env
- [ ] Conditional rendering
- [ ] Display spinner/loader while data is loading
- [ ] (advanced) create a service (a function or class in charge of all requests to the api; we did that in m2 at some point)
- [ ] (advanced) Convert all function components to class components
  (note: syntax to do props, state and api requests are a bit different in class components)

## In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
