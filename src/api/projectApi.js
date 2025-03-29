// import axios from "axios";

// // ✅ API Base URL
// const API_URL = "/api/projects";

// // === Get All Projects ===
// export const getProjects = async () => {
//   try {
//     const response = await axios.get(API_URL);
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching projects:", error.response?.data || error);
//     throw error;
//   }
// };

// // === Add New Project ===
// export const addProject = async (projectData) => {
//   try {
//     const response = await axios.post(API_URL, projectData);
//     return response.data;
//   } catch (error) {
//     console.error("Error adding project:", error.response?.data || error);
//     throw error;
//   }
// };
