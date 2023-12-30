import React, { useState } from "react";

const AccountSettingsPage = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [subscriptionPlan, setSubscriptionPlan] = useState("Pro Plan");
  const [linkedAccounts, setLinkedAccounts] = useState(["Google"]);
  const [usageStatistics, setUsageStatistics] = useState({
    graphsCreated: 25,
    graphsShared: 15,
  });

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleCurrentPasswordChange = (e) => {
    setCurrentPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubscriptionPlanChange = (e) => {
    setSubscriptionPlan(e.target.value);
  };

  const handleLinkedAccountsChange = (e) => {
    const selectedAccount = e.target.value;
    setLinkedAccounts((prevAccounts) => {
      if (prevAccounts.includes(selectedAccount)) {
        return prevAccounts.filter((account) => account !== selectedAccount);
      } else {
        return [...prevAccounts, selectedAccount];
      }
    });
  };

  const handleConnectGoogle = () => {
    // Logic for connecting Google account
    if (!linkedAccounts.includes("Google")) {
      setLinkedAccounts((prevAccounts) => [...prevAccounts, "Google"]);
    }
  };

  const handleDisconnectGoogle = () => {
    // Logic for disconnecting Google account
    setLinkedAccounts((prevAccounts) =>
      prevAccounts.filter((account) => account !== "Google")
    );
  };

  return (
    <div className="max-w-3xl mx-auto p-4 mt-8">
      <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
      <form className="space-y-4">
        {/* Update Profile Section */}
        <div className="flex flex-col">
          <label htmlFor="username" className="text-sm font-semibold mb-1">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            className="py-2 px-3 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-sm font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="py-2 px-3 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Change Password Section */}
        <div className="flex flex-col">
          <label htmlFor="currentPassword" className="text-sm font-semibold mb-1">
            Current Password
          </label>
          <input
            type="password"
            id="currentPassword"
            value={currentPassword}
            onChange={handleCurrentPasswordChange}
            className="py-2 px-3 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="newPassword" className="text-sm font-semibold mb-1">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            value={newPassword}
            onChange={handleNewPasswordChange}
            className="py-2 px-3 border border-gray-300 rounded"
            required
          />
        </div>

        {/* Subscription Plan Section */}
        <div className="flex flex-col">
          <label htmlFor="subscriptionPlan" className="text-sm font-semibold mb-1">
            Subscription Plan
          </label>
          <select
            id="subscriptionPlan"
            value={subscriptionPlan}
            onChange={handleSubscriptionPlanChange}
            className="py-2 px-3 border border-gray-300 rounded"
          >
            <option value="Free Plan">Free Plan</option>
            <option value="Pro Plan">Pro Plan</option>
            <option value="Premium Plan">Premium Plan</option>
          </select>
        </div>

        {/* Linked Accounts Section */}
         {/* Linked Accounts Section */}
         <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Linked Accounts</label>
          <div className="space-y-2">
            {linkedAccounts.includes("Google") ? (
              <div className="flex items-center">
                <span className="mr-2">Google</span>
                <button
                  type="button"
                  className="text-red-500 hover:text-red-700"
                  onClick={handleDisconnectGoogle}
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleConnectGoogle}
              >
                Connect Google
              </button>
            )}
            {/* Add other third-party account options */}
          </div>
        </div>
        {/* Usage Statistics Section */}
        <div className="flex flex-col">
          <label className="text-sm font-semibold mb-1">Usage Statistics</label>
          <p>Graphs Created: {usageStatistics.graphsCreated}</p>
          <p>Graphs Shared: {usageStatistics.graphsShared}</p>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default AccountSettingsPage;
