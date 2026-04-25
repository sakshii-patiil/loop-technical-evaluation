export const Locators = {
  login: {
    username: 'xpath=/html/body/div/div/div/form/div[1]/input',
    password: 'xpath=/html/body/div[1]/div/div/form/div[2]/input',
    signInButton: 'xpath=/html/body/div[1]/div/div/form/button',
  },
  dashboard: {
    nav: 'xpath=/html/body/div/div/div[1]/nav',
    projectButton: (projectName: string) => `xpath=.//button[contains(., "${projectName}")]`,
    columnsContainer: 'xpath=/html/body/div/div/div[2]/main/div/div',
    // Dynamic column based on header text
    column: (columnName: string) => `xpath=.//h2[contains(., "${columnName}")]/parent::div`,
    // Dynamic task card based on title
    taskCard: (taskTitle: string) => `xpath=.//h3[contains(text(), "${taskTitle}")]/ancestor::div[contains(@class, "bg-white")]`,
    // Dynamic tag based on tag name (relative to card)
    taskTag: (tagName: string) => `xpath=.//span[contains(text(), "${tagName}")]`,
  }
};
