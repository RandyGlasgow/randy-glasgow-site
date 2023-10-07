import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  handler: async (ctx) => await ctx.db.query("guestbook").collect(),
});

export const addEntry = {
  name: v.string(),
  company: v.optional(v.string()),
  message: v.optional(v.string()),
  date: v.optional(v.string()),
  entryId: v.optional(v.number()),
};
export const post = mutation({
  args: addEntry,
  handler: async (ctx, args) => {
    const count = (await ctx.db.query("guestbook").collect()).length;
    return ctx.db.insert("guestbook", {
      ...args,
      date: Date.now(),
      entryId: count + 1,
    });
  },
});
