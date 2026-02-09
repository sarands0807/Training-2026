import { render, screen } from '@testing-library/react';
import App from './App';
import Sum from './component/Sum';
import GreetComp from './component/GreetComp';
import ImageTest from './component/ImageTest';
//test('renders learn react link', () => {
 // render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
//});

{/*test("check addition of two numbers", ()=>{
  render(<Sum/>);
  expect(Sum(2,3)).toBe(5); 
});

test("check GreetComp renders correctly", ()=>{
  render(<GreetComp/>);
 expect(screen.getByText(/Good afternoon Friends!/i)).toBeInTheDocument();
});

test("check ImageTest renders correctly", ()=>{
  render(<ImageTest/>);
  const title = screen.getByTitle("car");
  expect(title).toBeInTheDocument();
});

test("Test Case for Input Box", ()=>{
  render(<ImageTest/>);
  let CheckInput = screen.getByRole("textbox");
  expect(CheckInput).toBeInTheDocument();


let CheckInputPlaceholder = screen.getByPlaceholderText("enter Name");
expect(CheckInputPlaceholder).toBeInTheDocument();

expect(CheckInputPlaceholder).toHaveAttribute("userid","user123")
});*/}

describe.skip("UI test case group", ()=>{
  test("test case 1", ()=>{
    render(<ImageTest/>);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("userid","user123");
  });

  test ("test case 2", ()=>{
    render(<ImageTest/>);
    let checkInput = screen.getByPlaceholderText("enter Name");
    expect(checkInput).toHaveAttribute("userid","user123");
  });

  test ("test case 3", ()=>{
    render(<ImageTest/>);
    let checkInput = screen.getByPlaceholderText("enter Name");
    expect(checkInput).toHaveAttribute("userid","user123");
  });
});

  describe.only("API test case", ()=>{
  test("test case 4", ()=>{
    render(<ImageTest/>);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("userid","user123");
  });

  test ("test case 5", ()=>{
    render(<ImageTest/>);
    let checkInput = screen.getByPlaceholderText("enter Name");
    expect(checkInput).toHaveAttribute("userid","user123");
  });

  test ("test case 6", ()=>{
    render(<ImageTest/>);
    let checkInput = screen.getByPlaceholderText("enter Name");
    expect(checkInput).toHaveAttribute("userid","user123");
  });
});

describe("Nested UI test case group", () => 
  test("nested test case", ()=>{
    render(<ImageTest/>);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("userid","user123");
  })
);


