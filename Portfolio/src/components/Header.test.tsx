import { MemoryRouter } from "react-router-dom";
import { render,screen } from "@testing-library/react";
import { it,describe,expect } from "vitest";
import { Header } from './Header';

describe("Копонент Header",()=>{
    it("Тест посилань",()=>{
        render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const link1 = screen.getByText(/Projects/i);
    const link2 = screen.getByText(/main/i);
    const link3 = screen.getByText(/skills/i);

    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
    expect(link3).toBeInTheDocument();

    })
})