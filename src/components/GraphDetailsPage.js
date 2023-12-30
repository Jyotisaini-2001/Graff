import React from "react";

const GraphDetailsPage = () => {
  // Sample data for graph details
  const graphDetails = {
    title: "Sample Graph",
    description: "This is a sample graph description.",
    dateCreated: "2023-01-16",
  };

  // Sample data for papers shown in the graph
  const papersInGraph = [
    { id: 1, title: "Paper A" },
    { id: 2, title: "Paper B" },
    { id: 3, title: "Paper C" },
  ];

  const handleNavigateToGraph = () => {
    // Logic for navigating to the graph page
    console.log("Navigate to graph");
  };

  const handleEditGraph = () => {
    // Logic for editing the graph
    console.log("Edit graph");
  };

  const handleShareGraph = () => {
    // Logic for sharing the graph
    console.log("Share graph");
  };

  const handleDeleteGraph = () => {
    // Logic for deleting the graph
    console.log("Delete graph");
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-8">
      <h2 className="text-2xl font-bold mb-4">{graphDetails.title} Details</h2>
      <table className="min-w-full border border-gray-300 shadow-md rounded">
        <tbody>
          <tr>
            <td className="py-2 px-4 font-semibold">Graph Title:</td>
            <td className="py-2 px-4">{graphDetails.title}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-semibold">Description:</td>
            <td className="py-2 px-4">{graphDetails.description}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-semibold">Date Created:</td>
            <td className="py-2 px-4">{graphDetails.dateCreated}</td>
          </tr>
          <tr>
            <td className="py-2 px-4 font-semibold">Papers in the Graph:</td>
            <td className="py-2 px-4">
              <ul>
                {papersInGraph.map((paper) => (
                  <li key={paper.id}>{paper.title}</li>
                ))}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>

      {/* Action buttons for editing, sharing, and deleting the graph */}
      <div className="flex space-x-4 mt-4">
        <button
          className="bg-gradient-to-r from-blue-700 to-teal-500 hover:from-blue-700 hover:to-teal-400 text-white px-4 py-2 rounded hover:bg-yellow-600"
          onClick={handleEditGraph}
        >
          Edit Graph
        </button>
        <button
          className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handleShareGraph}
        >
          Share Graph
        </button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={handleDeleteGraph}
        >
          Delete Graph
        </button>
      </div>
    </div>
  );
};

export default GraphDetailsPage;
