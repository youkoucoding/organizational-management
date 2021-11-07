# About the project

This repo originates from [ThaddeusJiang/react-assignment-medium: Help us confirm the candidate's React and JavaScript skills](https://github.com/ThaddeusJiang/react-assignment-medium)

---

## Accomplished and Unaccomplished

#### Spec1

- [x] User can modify organization details (name).
- [ ] User can move an organization under the other organization.
- [x] user can create an organization.

#### Spec2

- [x] User can modify member info (name, age or status).
- [ ] User can move a member to the other organization.
- [x] User can create a member.
- [x] User can set a member as the representation, if the member is activated.

## Folder Structure

```bash
# src
├── __tests__
├── assets
├── components           # Stateless Components/Presentational Components
│   ├── table               # receive readyForRenderData to render Nested Components
│   ├── cards               # table Wrapper to divide the parent-null organization
│   ├── buttons
│   ├── modal               # dispatch actions for state changing
│   ├── layout
│   ├── footer
│   ├── sidebar
│   ├── header
│  
├── container            # Stateful Components
│   ├── contextProvider     # Requesting data, composing data, and providing global context
│   └── main                # conditional rendering by global state, and converting composited data to readyForRenderData
├── model                # Core Data structure.
├── state                # reducer and context
└── utils                # utilities functions for handling data
```

## Core Process

### Encountered Difficulties

1. There are two different Data sources. How to get them concurrently.

2. How to combine the different data into the required **STATE**.

3. How to deal with the STATE DATA structure and ReadyforRenderData structure, design as the same, or use the different data structure.

4. Rendering the Nested Components recursively.

5. The handling data structure is JS Struggle. :haircut: Of course, including the working with reducer.

### Adopted Solutions

1. `Promise.all` This method returns OK, when all the requests have resolved. And throwing a error immediately as soon as any of requests failed.

2. Design a tool function that assembles the data requested from the backend at the initial stage. `<AppContextProvider/>`

3. The structure of the ReadyForRenderData is deeply nested, so I treat the structure of the global state data and the quasi-rendered data, separately. This facilitates the modification of Global State.

### Core Principles

Keep the global STATE **SIMPLE** **UNIQUE** and **MINIMUM**. Leave the Computation to the components and optimize performance with useCallback and useMemo.
