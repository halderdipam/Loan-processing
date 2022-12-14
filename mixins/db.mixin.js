"use strict";

const fs = require("fs");
const DbService = require("moleculer-db");
const MongooseAdapter = require("moleculer-db-adapter-mongoose");

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = function (collection) {
	// const cacheCleanEventName = `cache.clean.${collection}`;

	const schema = {
		mixins: [DbService],

		events: {
			/**
			 * Subscribe to the cache clean event. If it's triggered
			 * clean the cache entries for this service.
			 *
			 * @param {Context} ctx
			 */
			// async [cacheCleanEventName]() {
			// 	if (this.broker.cacher) {
			// 		await this.broker.cacher.clean(`${this.fullName}.*`);
			// 	}
			// },
		},

		methods: {
			/**
			 * Send a cache clearing event when an entity changed.
			 *
			 * @param {String} type
			 * @param {any} json
			 * @param {Context} ctx
			 */
			async entityChanged(type, json, ctx) {
				// ctx.broadcast(cacheCleanEventName);
			},
		},

		async started() {
			
		},
	};

	

	schema.adapter = new MongooseAdapter(
		"mongodb://localhost/loan",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	);
	schema.collection = collection;

	return schema;
};
