import * as z from "zod"

export const storeSchema = z.object({
  name: z.string().min(3).max(50),
  description: z.string().optional(),
})

export const getStoreSchema = z.object({
  id: z.number(),
  userId: z.string(),
})
