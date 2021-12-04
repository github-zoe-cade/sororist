import { createContext, useContext, useEffect, useState } from "react";
// import fakeEditProfile from "lib/fakeEditProfile";
// import { fromPairs } from "lib/helpers";
// import { EditProfileType } from "lib/profiles";

// const Context = createContext({ loading: true, error: null, profiles: {} });

// const Provider = (props) => {
//   const state = { loading: true, error: null, profiles: {} }

//   const fetchProfiles = async () => {
//     try {
//       // fetch API
//       const res = {
//         code: 200,
//         data: {
//           profiles: Array.from({ length: 50 }).map((_) => fakeEditProfile),
//         },
//       };
//       this.state.profile = fromPairs(res.data.profiles.map((profile) => [profile.uuid, profile]))
//       setError(null);
//       setLoading(false);
//     } catch (e) {
//       setError(e);
//     }
//   };

//   useEffect(() => {
//     fetchProfiles();
//   }, []);

//   const setProfile = (data) => {
//     setProfiles((prevState) => ({
//       ...prevState,
//       [data.uuid]: data,
//     }));
//   };

//   const providedValues = {
//     loading,
//     error,
//     profiles,
//     setProfile,
//   };

//   return <Context.Provider value={providedValues} {...props} />;
// };

// const useProfiles = () => useContext(Context);

// export { Provider, useProfiles };
