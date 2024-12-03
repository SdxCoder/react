
import ProductList from './components/product_list';
import ThemeSwitcher from './components/theme_switcher';
import { ThemeContextProvider } from './theme/theme_provider'


function App() {
  return (
    <ThemeContextProvider>
      <>
        <ThemeSwitcher />
        <ProductList />
      </>

    </ThemeContextProvider>

  )
}

export default App
