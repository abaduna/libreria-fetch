/**
 * @jest-environment jsdom
 */
import {act,renderHook} from "@testing-library/react"
import { describe,expect,it } from "vitest"

import { useAxios } from "../hooks/useFetch"


describe("useAxios",()=>{
    it("should fetch in useEfect",()=>{
        const {result}=renderHook(()=>useAxios({method:"get",url:"https://rickandmortyapi.com/api/character",enabled:true})) 
        expect(result.current.data).toBe("")
        act(()=>{
            result.current.fetcher
        })
        expect(result.current.loading).toBe(true)
    })
})