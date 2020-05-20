browser.addCommand('compare', function (pageName, compareOptions) {
  const visualResults = browser.checkScreen(pageName, compareOptions);
  console.log(visualResults.fileName);
  console.log(visualResults.folders.actual);
  console.log(visualResults.folders.baseline);
  console.log(visualResults.folders.diff);
  return visualResults.misMatchPercentage;
});
