import NavLog from "../partials/NavLog";
import Input from "../components/Input";
import React, { useState } from "react";

const BookPost = () => {
  const [name, setBookName] = useState("");
  const [info, setInfo] = useState("");
  const [category, setCategory] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const bookData = {
      name,
      info,
      category,
      link
    };

    try {
      const response = await fetch("http://localhost:8000/api/booksuggest", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookData),
      });

      if (!response.ok) {
        throw new Error("Error submitting form");
      }

      // // Form submitted successfully
      // console.log("Form submitted:", bookData);
      // // Reset form fields
      // setBookName("");
      // setInfo("");
      // setCategory("");
      // setLink("");
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };

  return (
      <>
          <div className="container max-w-screen-lg mx-auto dark:bg-gray-900">
              <div className="dark:bg-gray-900 bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                  <div className="text-gray-600 dark:text-white">
                    <p className="font-medium text-lg">Book Suggestion form</p>
                    <p>Enter book details.</p>
                  </div>

                  <div className="lg:col-span-2">
                    <form onSubmit={handleSubmit}>
                      <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                        <div className="md:col-span-5  dark:text-white">
                          <label htmlFor="book_name">Book Name</label>
                          <input
                              required={true}
                              type="text"
                              name="book_name"
                              id="book_name"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              onChange={(event) => setBookName(event.target.value)}
                          />
                        </div>

                        <div className="md:col-span-5  dark:text-white">
                          <label htmlFor="info">Book Info</label>
                          <input
                              required={true}
                              type="text"
                              name="info"
                              id="info"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              placeholder=""
                              onChange={(event) => setInfo(event.target.value)}
                          />
                        </div>

                        <div className="md:col-span-3  dark:text-white">
                          <label htmlFor="category">Category</label>
                          <input
                              required={true}
                              type="text"
                              name="category"
                              id="category"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              placeholder=""
                              onChange={(event) => setCategory(event.target.value)}
                          />
                        </div>

                        <div className="md:col-span-2">
                          <label htmlFor="link">Link</label>
                          <input
                              type="text"
                              name="link"
                              id="link"
                              className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                              placeholder=""
                              onChange={(event) => setLink(event.target.value)}
                          />
                        </div>
                        <div className="md:col-span-5 text-right">
                          <div className="inline-flex items-end">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
          </div>
      </>
  );
};

export default BookPost;




{/* <div class="md:col-span-2">
                      <label for="country">Country / region</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="country"
                          id="country"
                          placeholder="Country"
                          class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value=""
                        />
                        <button
                          tabindex="-1"
                          class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            class="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabindex="-1"
                          for="show_more"
                          class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            class="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div class="md:col-span-2">
                      <label for="state">State / province</label>
                      <div class="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                        <input
                          name="state"
                          id="state"
                          placeholder="State"
                          class="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                          value=""
                        />
                        <button
                          tabindex="-1"
                          class="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600"
                        >
                          <svg
                            class="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                        <button
                          tabindex="-1"
                          for="show_more"
                          class="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600"
                        >
                          <svg
                            class="w-4 h-4 mx-2 fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <polyline points="18 15 12 9 6 15"></polyline>
                          </svg>
                        </button>
                      </div>
                    </div> */}