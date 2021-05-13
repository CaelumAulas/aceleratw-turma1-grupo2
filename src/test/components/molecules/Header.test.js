import React from 'react';
import Header from '../../../components/molecules/Header.jsx'
import { render, screen }  from '@testing-library/react'
describe("Header", () => {

  describe("Tests", ()=>{
    describe("Test if links exists", ()=>{
      it("Link List Vehicle link exist", () => {
        render(<Header />);
        expect(screen.getByTestId('linkListVehicle')).toBeInTheDocument();
      })
      
      it("Link Admin Acess link exist", () => {
        render(<Header />);
        expect(screen.getByTestId('linkAdminAccess')).toBeInTheDocument();
      }) 
      it("Link List Vehicle link exist", () => {
        render(<Header />);
        expect(screen.getByTestId('linkListVehicle')).toBeInTheDocument();
      }) 
      it("Button arrow exist", () => {
        render(<Header />);
        expect(screen.getByTestId('btnHeaderArrowIcon')).toBeInTheDocument();
      })
      it("Button arrow exist", () => {
        render(<Header />);
        expect(screen.getByTestId('linkAdminAccess')).toBeInTheDocument();
      })
      it("Button arrow exist", () => {
        render(<Header />);
        expect(screen.getByTestId('linkListBrands')).toBeInTheDocument();
      })
      it("Button arrow exist", () => {
        render(<Header />);
        expect(screen.getByTestId('linkDashboard')).toBeInTheDocument();
      })
      it("Button arrow exist", () => {
        render(<Header />);
        expect(screen.getByTestId('linkEditPassword')).toBeInTheDocument();
      }) 
    })
  })
 
  /*it("Test should find Icon button's id", () => {
      const iconBtn = wrapper.find("#icon-btn");
      expect(iconBtn.exists()).toBeTruthy();
  });

  it("Test should find header title text", () => {
    const headerTitle = wrapper.find("#header-title").text();
    expect(headerTitle).toBe('CARANGO BOM');    
  });

  it("Test should find Drawer's id", () => {
    const drawer = wrapper.find("#header-drawer");
    expect(drawer.exists()).toBeTruthy();
  });

  it("Test should find arrow icon button's id", () => {
    const iconBtn = wrapper.find("#header-arrow-icon-btn");
    expect(iconBtn.exists()).toBeTruthy();
  });

  it("Test should find header 'Listar Veículos a venda' exists", () => {
    const text = wrapper.find("#listar-btn");
    expect(text.exists()).toBeTruthy();
  });

  it("Test should find header 'Cadastrar Veículos' exists", () => {
    const text = wrapper.find("#cad-btn");
    expect(text.exists()).toBeTruthy();
  });*/
});