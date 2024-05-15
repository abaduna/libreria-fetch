/**
 * @jest-environment jsdom
 */
import {act,renderHook, waitFor} from "@testing-library/react"
import { describe,expect,it, test, vi } from "vitest"
import {instance} from './../utils/mockAxios'
import { useAxios } from "../hooks/useFetch"
import axios, { AxiosError } from "axios"
import MockAdapter from 'axios-mock-adapter';
import { json } from "stream/consumers"
import sinon from 'sinon';
import { ACTIONS } from "../actions/fetch"



describe("useAxios",()=>{
    it("should fetch in useEfect",()=>{
        const {result}=renderHook(()=>useAxios({method:"get",url:"https://rickandmortyapi.com/api/character",enabled:false})) 
        expect(result.current.loading).toBe(false)
        act(()=>{
            result.current.fetcher
        })
        expect(result.current.loading).toBe(false)
    })
    it("should fetch in useEfect",()=>{
        const {result}=renderHook(()=>useAxios({method:"get",url:"https://rickandmortyapi.com/api/character",enabled:false})) 
        expect(result.current.data).toBe("")
        act(()=>{
            result.current.fetcher
        })
        expect(result.current.data).toBe("")
    })
    var mock = new MockAdapter(axios);
    it("fetches sucefuly data from apì",async()=>{
        const mockData = {foo:"bar"}
        mock.onGet("/users").reply(200,mockData)

        const {result }= renderHook(()=> useAxios({method:"get",url:"https://rickandmortyapi.com/api/character",enabled:true}))
        expect(result.current.data).toBe("")
        expect(result.current.loading).toBe(false)
        await waitFor(()=>{
            result.current.fetcher
        })
        expect(result.current.data).toBe("")
    })
    
})
