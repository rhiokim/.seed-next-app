describe('/amp/posts page', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000/amp/posts')
  })

  it('should load without error', async () => {
    await expect(page).toMatch('The Dog')
  })
})
