"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { database } from "@/lib/firebase"
import { ref, onValue, set, remove, push, update } from "firebase/database"
import type { Partner, PartnerFormData } from "@/lib/types"
import { toast } from "react-toastify"

/**
 * Tipe data untuk context Partners
 */


