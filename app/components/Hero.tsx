"use client";

import { useState } from "react";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    relationshipStatus: "",
    relationshipToUser: "",
    hobbies: "",
  });
  const [showResults, setShowResults] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShowResults(true); // Show the results view
  };

  const handleReset = () => {
    setShowResults(false);
    setFormData({
      name: "",
      gender: "",
      relationshipStatus: "",
      relationshipToUser: "",
      hobbies: "",
    });
  };

  // Generate the roast
  const roast = `Oh ${formData.name}, a ${formData.gender} who's ${
    formData.relationshipStatus.toLowerCase()
  } and spends way too much time on ${
    formData.hobbies
  }. No wonder your ${formData.relationshipToUser} sent you here!`;

  return (
    <div className="hero min-h-screen -mt-40 flex items-center justify-center">
      <div className="hero-content flex flex-col items-center gap-6">
        {!showResults ? (
          <form
            className="flex flex-col gap-4 w-full max-w-lg"
            onSubmit={handleSubmit}
          >
            <h1 className="text-5xl font-bold mb-4">AI Roast Generator</h1>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Enter their name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  className="radio radio-primary"
                  onChange={handleInputChange}
                />
                <span>Male</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  className="radio radio-primary"
                  onChange={handleInputChange}
                />
                <span>Female</span>
              </label>
            </div>
            <select
              name="relationshipStatus"
              className="select select-bordered w-full"
              value={formData.relationshipStatus}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Select relationship status
              </option>
              <option>Single</option>
              <option>In a Relationship</option>
              <option>Complicated</option>
              <option>Married</option>
            </select>
            <select
              name="relationshipToUser"
              className="select select-bordered w-full"
              value={formData.relationshipToUser}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                How are you related?
              </option>
              <option>Friend</option>
              <option>Sibling</option>
              <option>Coworker</option>
              <option>Parent</option>
              <option>Other</option>
            </select>
            <textarea
              name="hobbies"
              className="textarea textarea-bordered w-full"
              placeholder="Enter their notable hobbies or traits"
              value={formData.hobbies}
              onChange={handleInputChange}
            ></textarea>
            <button className="btn btn-lg btn-accent w-full">Generate Roast</button>
          </form>
        ) : (
          <div className="text-center max-w-lg">
            <h1 className="text-4xl font-bold mb-12">🎤 {formData.name}'s Roast:</h1>
            <div className="chat chat-end">
              <div className="chat-bubble text-white chat-bubble-secondary">{roast}</div>
            </div>
            <div className="flex flex-col items-center gap-4 mt-12">
              <button className="btn btn-lg btn-accent" onClick={handleReset}>
                Generate Another Roast
              </button>
              <button
                className="btn btn-lg btn-outline btn-primary"
                onClick={handleReset}
              >
                Premium Roast
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
