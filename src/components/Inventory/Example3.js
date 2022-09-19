const Example3 = () => {
  const reactAppBreakdown = [
    "Material-UI & Design System Setup",
    "Redux-Toolkit or Better Option for State Management and Data Caching?",
    "Create Template in LSL Org and Make Web-UI Repo",
    "Custom Hook for Fetching -- Abstracting The Logic That Is Used Over and Over",
    "Suggestions/Changes?",
  ];
  const listItems = reactAppBreakdown.map((item) => <li>{item}</li>);
  return (
    <>
      <table>
        <p>What Remains?</p>
        <ul>{listItems}</ul>
      </table>
    </>
  );
};

export default Example3;
