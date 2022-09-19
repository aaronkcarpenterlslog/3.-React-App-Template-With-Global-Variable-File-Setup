const Example = () => {
  const reactAppBreakdown = [
    "node_modules/: Dependencies. Isnt Pushed to Git. npm i when you pull from the repo",
    "public/index.html: Compiled code all flows into here when a new build is made",
    "src/: Contains the JS resources",
    "src/components/: Components are the reusable sections of code, separated by which feature it was created for",
    "src/features/: Features are the actual pages that put together the different components created.",
    "src/index.js: The JavaScript Entrypoint for the Application. It corresponds with the public/index.html file",
    ".env: Stores the global/environment variables. Not Pushed to GH.",
    ".gitignore: List of files/directories that are being ignored.",
    "package-lock.json: Automatically generates when package.json is created OR modified.",
    "package.json: Lists all dependencies that are needed for the application to function properly.",
    "README.md: Simple overview of the application and the features.",
  ];
  const listItems = reactAppBreakdown.map((item) => <li>{item}</li>);
  return (
    <>
      <table>
        <p>Hi</p>
        <ul>{listItems}</ul>
      </table>
    </>
  );
};

export default Example;
