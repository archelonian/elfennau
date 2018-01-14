/*
(C) 2018 Klaus Llwynog.

This file is part of Whiskey.

Whiskey is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Whiskey is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with Whiskey.  If not, see <http://www.gnu.org/licenses/>
*/

var features = [[ "cons",         "Consonantal", "0"],
                [  "son",            "Sonorant", "0"],
                [ "syll",            "Syllabic", "0"],
                ["voice",               "Voice", "0"],
                [   "sg",      "Spread Glottis", "0"],
                [   "cg", "Constricted Glottis", "0"],
                [ "cont",          "Continuant", "0"],
                [  "str",            "Strident", "0"],
                [  "lat",             "Lateral", "0"],
                [  "del",     "Delayed Release", "0"],
                [  "nas",               "Nasal", "0"],
                [  "lab",              "Labial", "0"],
                [  "rnd",             "Rounded", "0"],
                [  "cor",             "Coronal", "0"],
                [  "ant",            "Anterior", "0"],
                [ "dist",         "Distributed", "0"],
                [ "dors",              "Dorsal", "0"],
                [ "high",                "High", "0"],
                [  "low",                 "Low", "0"],
                ["front",               "Front", "0"],
                [ "back",                "Back", "0"],
                ["tense",               "Tense", "0"],
                [ "phar",          "Pharyngeal", "0"],
                [  "atr",    "Adv. Tongue Root", "0"]];

//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi Lo Fr Ba Tn Ph AT
var segments = [["wbp", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// p
                ["vbp", 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// b
                ["wap", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// t
                ["vap", 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// d
                ["wrp", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 1],// tr
                ["vrp", 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 1],// dr
                ["wpp", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 2, 2, 0, 2, 0, 0, 0, 1],// c
                ["vpp", 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 2, 2, 2, 0, 2, 0, 0, 0, 1],// j
                ["wvp", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],// k
                ["vvp", 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],// g
                ["wup", 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 0, 0, 0, 2, 0, 0, 1],// q
                ["vup", 2, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 0, 0, 0, 2, 0, 0, 1],// G
                ["wgp", 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// ?
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An D1 Do Hi L1 Fr Ba Tn Ph AT
                ["vbn", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// m
                ["vln", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// mf
                ["van", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// n
                ["vrn", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 1],// nr
                ["vpn", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 1, 2, 2, 0, 2, 0, 0, 0, 1],// nj
                ["vvn", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],// ng
                ["vun", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 1, 2, 0, 0, 0, 2, 0, 0, 1],// N
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["vbr", 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// B
                ["var", 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// r
                ["vur", 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 0, 0, 0, 2, 0, 0, 1],// R
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["vlt", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// v
                ["vat", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// r
                ["vrt", 2, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 1],// rR
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["wbf", 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// B
                ["vbf", 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// P
                ["wlf", 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// f
                ["vlf", 2, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// v
                ["wdf", 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// th
                ["vdf", 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// dh
                ["waf", 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// s
                ["vaf", 2, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// z
                ["wrf", 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 1],// sr
                ["vrf", 2, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 1],// zr
                ["wqf", 2, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 0, 2, 0, 1, 1, 1, 1, 1, 0, 1],// S
                ["vqf", 2, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 0, 1, 2, 0, 2, 0, 1, 1, 1, 1, 1, 0, 1],// Z
                ["wpf", 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 2, 0, 2, 2, 2, 0, 2, 0, 0, 0, 1],// ch
                ["vpf", 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 2, 0, 2, 2, 2, 0, 2, 0, 0, 0, 1],// jh
                ["wvf", 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],// x
                ["vvf", 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],// G
                ["wuf", 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 0, 0, 0, 2, 0, 0, 1],// X
                ["vuf", 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, 0, 0, 0, 2, 0, 0, 1],// R
                ["wff", 2, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 2, 0],// h
                ["vff", 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 2, 0],// ?
                ["wgf", 2, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// h
                ["vgf", 2, 0, 0, 2, 2, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// H
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["waz", 2, 0, 0, 0, 2, 0, 2, 0, 2, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// ll
                ["vaz", 2, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// dl
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["vla", 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// vw
                ["vaa", 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// rw
                ["vra", 2, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 0, 1, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 1],// rr
                ["vpa", 0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 2, 0, 2, 0, 0, 0, 1],// j
                ["vva", 0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],// gw
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["val", 2, 2, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// l
                ["vrl", 2, 2, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 1, 2, 0, 0, 2, 0, 0, 2, 0, 0, 0, 1],// lr
                ["vpl", 2, 2, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 1, 0, 1, 1, 2, 2, 0, 2, 0, 0, 0, 1],// lj
                ["vvl", 2, 2, 0, 2, 0, 0, 2, 0, 2, 0, 0, 0, 1, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],// lg
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["vpz", 0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 2, 0, 2, 0, 0, 0, 1],// wj
                ["wvz", 0, 2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],// hw
                ["vvz", 0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],// w
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["wl2", 2, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 2, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],// pf
                ["wa2", 2, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// ts
                ["va2", 2, 0, 0, 2, 0, 0, 3, 0, 0, 2, 0, 0, 1, 2, 2, 0, 0, 1, 1, 1, 1, 1, 0, 1],// dz
                ["wq2", 2, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 1, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 1],// tS
                ["vq2", 2, 0, 0, 2, 0, 0, 3, 0, 0, 2, 0, 0, 1, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 1],// dZ
                ["wv2", 2, 0, 0, 0, 0, 0, 3, 0, 0, 2, 0, 0, 1, 0, 1, 1, 2, 2, 0, 0, 2, 0, 0, 1],// kx
//                     Co So Sy Vo SG CG Cn St La DR Na Lb Rd Co An Di Do Hi L1 Fr Ba Tn Ph AT
                ["v000", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 2, 0, 2, 0, 2, 2, 2],// i
                ["v001", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 2, 0, 2, 0, 2, 2, 2],// y
                ["v020", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 2, 0, 0, 0, 2, 2, 0],//  
                ["v021", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 2, 0, 0, 0, 2, 2, 0],//  
                ["v040", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 2, 0, 0, 2, 2, 2, 0],// w
                ["v041", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 2, 0, 0, 2, 2, 2, 2],// u
                ["v110", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 2, 0, 2, 0, 0, 2, 0],// i
                ["v111", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 2, 0, 2, 0, 0, 2, 0],// y
                ["v131", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 2, 0, 0, 2, 0, 2, 0],// u
                ["v200", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 0, 0, 2, 0, 2, 2, 2],// e
                ["v201", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 0, 0, 2, 0, 2, 2, 2],// oe
                ["v220", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 0, 0, 0, 0, 2, 2, 0],//  
                ["v221", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 0, 0, 0, 0, 2, 2, 0],//  
                ["v240", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 0, 0, 0, 2, 2, 2, 2],// v
                ["v241", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 0, 0, 0, 2, 2, 2, 2],// o
                ["v320", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 2, 0],// @
                ["v400", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 0, 0, 2, 0, 0, 2, 0],// E
                ["v401", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 0, 0, 2, 0, 0, 2, 0],// oe
                ["v420", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 0, 0, 0, 0, 0, 2, 0],//  
                ["v421", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 0, 0, 0, 0, 0, 2, 0],//  
                ["v440", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 0, 0, 0, 2, 0, 2, 0],// ^
                ["v441", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 0, 0, 0, 2, 0, 2, 0],//  
                ["v510", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 0, 2, 2, 0, 2, 2, 0],// ae
                ["v520", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 0, 2, 0, 0, 2, 2, 0],//  
                ["v620", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 0, 2, 0, 0, 0, 2, 0],// a
                ["v621", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 0, 2, 0, 0, 0, 2, 0],// OE
                ["v640", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 1, 1, 2, 0, 2, 0, 2, 0, 2, 0],//  
                ["v641", 0, 2, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 2, 0, 1, 1, 2, 0, 2, 0, 2, 0, 2, 0] //  
               ];

var hidehiro = false;

function init() {
  for (var i = 0; i < segments.length; i++) {
    for (var j = 0; j < segments[i].length; j++) {
      switch (segments[i][j]) {
        case 0:
          segments[i][j] = "m";
          break;
        case 1:
          segments[i][j] = "0";
          break;
        case 2:
          segments[i][j] = "p";
          break;
        case 3:
          segments[i][j] = "b";
          break;
      }
    }
  }

  var symbols = document.getElementsByClassName("symbol");
  for (var symbol of symbols) {
    symbol.addEventListener('click', function(evt) { flip(evt); });
  }

  document.getElementById("hide").checked = false;

  if (navigator.userAgent.match(/Mobile/)) {
    document.getElementById("mobile-h2").innerHTML = "";
    document.getElementById("mobile-sg").innerHTML = "S. Glottis";
    document.getElementById("mobile-cg").innerHTML = "C. Glottis";
  }
}

function flip(evt) {
  var properties = evt.target.id;
  var segID = -1;
  var segValue;

  for (var i = 0; i < segments.length; i++) {
    if (segments[i][0] === properties) {
      segID = i;
      break;
    }
  }

  for (var i = 0; i < features.length; i++) {
    segValue = segments[segID][i + 1];
    if (segValue === "b") {
      segValue = "0";
    }

    features[i][2] = segValue;
    document.getElementById(features[i][0] + "-" + segValue).checked = true;
  }

  update();
}

function update() {
  var groups = document.getElementsByClassName("group");
  var output = [];

  for (var i = 0; i < features.length; i++) {
    var value = document.querySelector("input[name = " + features[i][0] + "]:checked").value;
    var fuckvalue = value[value.length - 1];

    features[i][2] = value;

    var name = groups[i].className.split(" ")[1];
    switch (fuckvalue) {
      case "m":
        groups[i].style.background = "#ffd0d0";
        break;
      case "0":
        groups[i].style.background = "#ffffff";
        break;
      case "p":
        groups[i].style.background = "#d0d0ff";
        break;
    }

    if (fuckvalue == "m") {
      output.push("<span class = \"minus\">&minus; " + features[i][1] + "</span>");
    } else if (fuckvalue == "p") {
      output.push("<span class = \"plus\">&plus; " + features[i][1] + "</span>");
    } else if ((!hidehiro) && (fuckvalue == "0")) {
      output.push("<span class = \"plusmn\">&plusmn; " + features[i][1] + "</span>");
    }
  }

//  console.log(hidehiro);

  showBox(output);
  showChart(output);
}

function showBox(output) {
  box = document.getElementById("little-box");
  box.innerHTML = "<p>";

  if (output.length > 0) {
    for (var i = 0; i < output.length; i++) {
      box.innerHTML += output[i] + "<br />";
    }
  } else {
    box.innerHTML += "<span class = \"plusmn\">&plusmn; All</span>";
  }

  box.innerHTML += "</p>";
}

function showChart() {
  for (var i = 0; i < segments.length; i++) {
    var seg = document.getElementById(segments[i][0]);

    seg.style.visibility = "visible";
    seg.style.color = "black";
  }

  for (var i = 0; i < segments.length; i++) {
    for (var j = 0; j < features.length; j++) {
      var seg = document.getElementById(segments[i][0]);
      if (!(features[j][2] === "0")) {
        if ((features[j][2] === "m") && (segments[i][j + 1] === "0")) {
          seg.style.color = "#a0a0a0";
        } else if (!(segments[i][j + 1] === "b")) {
          if (!(features[j][2] === segments[i][j + 1])) {
            seg.style.visibility = "hidden";
          }
        }
      }
    }
  }
}

function reset() {
  for (var i = 0; i < features.length; i++) {
    features[i][2] = "0";
    document.getElementById(features[i][0] + "-0").checked = true;
  }

  update();
}

function hide() {
  hidehiro = !hidehiro;

  update();
}

init();
update();
