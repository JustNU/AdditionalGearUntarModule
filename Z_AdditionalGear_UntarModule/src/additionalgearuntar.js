"use strict";

class AdditionalGearUntar
{
	
	static onLoadMod() 
	{
		// Constants
		const db = `user/mods/Z_AdditionalGear_UntarModule/db/`;
		const Config = JsonUtil.deserialize(VFS.readFile(`user/mods/Z_AdditionalGear_UntarModule/config/config.json`));
		
		// add retextures 	    (db,	"original item id",			"new item id",			"bundle path");
		// Armored Vests //
		AdditionalGearUntar.addUntarGen4(db, 	"5b44d0de86f774503d30cba8", "AddGearUntar_GEN4_MOB",	"AddGearUntar/ArmoredVests/gen4_untar_mob_mesh.bundle");
		
		// Headwear //
		JustNUCore.AddItemRetexture(db, 	"5f60e7788adaa7100c3adb49", "AddGearUntar_BERET",	"AddGearUntar/Headgear/beret_untar.bundle");
		JustNUCore.AddItemRetexture(db, 	"5b40e1525acfc4771e1c6611", "AddGearUntar_ULACH", 	"AddGearUntar/Headgear/ulach_untar.bundle");
		
		// add trade offers
		if (Config.EnableTradeOffers) {
			// 							("item id",						"trader id",				"money id",					"price",	"trader lvl");
			// Peacekeeper
			JustNUCore.createTraderOffer("AddGearUntar_BERET", 			"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 29, 		1);
			JustNUCore.createTraderOffer("AddGearUntar_GEN4_MOB", 		"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 805, 		3);
			JustNUCore.createTraderOffer("AddGearUntar_ULACH", 			"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 660, 		3);
		}
		
		if (Config.AddToBots) {
			// add items to bots
			// Armored Vests //
			DatabaseServer.tables.bots.types["assault"].inventory.equipment.ArmorVest.push(
				"AddGearUntar_GEN4_MOB"
			);
			DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.ArmorVest.push(
				"AddGearUntar_GEN4_MOB"
			);
			DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.ArmorVest.push(
				"AddGearUntar_GEN4_MOB"
			);
			DatabaseServer.tables.bots.types["usec"].inventory.equipment.ArmorVest.push(
				"AddGearUntar_GEN4_MOB"
			);
			// Headgear //
			DatabaseServer.tables.bots.types["assault"].inventory.equipment.Headwear.push(
				"AddGearUntar_BERET",
				"AddGearUntar_ULACH"
			);
			DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.Headwear.push(
				"AddGearUntar_BERET",
				"AddGearUntar_ULACH"
			);
			DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.Headwear.push(
				"AddGearUntar_ULACH"
			);
			DatabaseServer.tables.bots.types["usec"].inventory.equipment.Headwear.push(
				"AddGearUntar_ULACH"
			);
			
			// MoreVariety support
			if (VFS.exists(`user/mods/MoreVariety/package.json`)) {
				// untareng
				DatabaseServer.tables.bots.types["untareng"].inventory.equipment.Headwear.push(
					"AddGearUntar_BERET",
					"AddGearUntar_ULACH"
				);
				DatabaseServer.tables.bots.types["untareng"].inventory.equipment.ArmorVest.push(
					"AddGearUntar_GEN4_MOB"
				);
				
				// untarger
				DatabaseServer.tables.bots.types["untarger"].inventory.equipment.Headwear.push(
					"AddGearUntar_BERET",
					"AddGearUntar_ULACH"
				);
				DatabaseServer.tables.bots.types["untarger"].inventory.equipment.ArmorVest.push(
					"AddGearUntar_GEN4_MOB"
				);
				
				// untarfra
				DatabaseServer.tables.bots.types["untarfra"].inventory.equipment.Headwear.push(
					"AddGearUntar_BERET",
					"AddGearUntar_ULACH"
				);
				DatabaseServer.tables.bots.types["untarfra"].inventory.equipment.ArmorVest.push(
					"AddGearUntar_GEN4_MOB"
				);
				
				// untarpol
				DatabaseServer.tables.bots.types["untarpol"].inventory.equipment.Headwear.push(
					"AddGearUntar_BERET",
					"AddGearUntar_ULACH"
				);
				DatabaseServer.tables.bots.types["untarpol"].inventory.equipment.ArmorVest.push(
					"AddGearUntar_GEN4_MOB"
				);
			};
		}
		
		// Modify quests
		if (Config.EnableQuestChanges) {
			const untarGear = [
				[
					"AddGearUntar_BERET",
					"5ab8e4ed86f7742d8e50c7fa"
				],
				[
					"AddGearUntar_ULACH",
					"5ab8e4ed86f7742d8e50c7fa"
				],
				[
					"5aa7d03ae5b5b00016327db5",
					"AddGearUntar_GEN4_MOB"
				],
				[
					"AddGearUntar_BERET",
					"AddGearUntar_GEN4_MOB"
				],
				[
					"AddGearUntar_ULACH",
					"AddGearUntar_GEN4_MOB"
				]
			];
			const armoredVests = [
				[
					"AddGearUntar_GEN4_MOB"
				]
			];
			const armoredGear = [
				[
					"AddGearUntar_GEN4_MOB"
				],
				[
					"AddGearUntar_ULACH"
				]
			];
			
			// HumanitarianSupplies
			if (DatabaseServer.tables.templates.quests["5a27b87686f77460de0252a8"]) {
				const HumanitarianSupplies = DatabaseServer.tables.templates.quests["5a27b87686f77460de0252a8"].conditions.AvailableForFinish[5]._props.counter.conditions[1]._props.equipmentInclusive;
				DatabaseServer.tables.templates.quests["5a27b87686f77460de0252a8"].conditions.AvailableForFinish[5]._props.counter.conditions[1]._props.equipmentInclusive = [
					...JsonUtil.clone(HumanitarianSupplies),
					...untarGear
				];
			};
			
			// Peacekeepingmission
			if (DatabaseServer.tables.templates.quests["5c0d4c12d09282029f539173"]) {
				const Peacekeepingmission1 = DatabaseServer.tables.templates.quests["5c0d4c12d09282029f539173"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentInclusive;
				const Peacekeepingmission2 = DatabaseServer.tables.templates.quests["5c0d4c12d09282029f539173"].conditions.AvailableForFinish[1]._props.counter.conditions[2]._props.equipmentInclusive;
				const Peacekeepingmission3 = DatabaseServer.tables.templates.quests["5c0d4c12d09282029f539173"].conditions.AvailableForFinish[2]._props.counter.conditions[2]._props.equipmentInclusive;
				const Peacekeepingmission4 = DatabaseServer.tables.templates.quests["5c0d4c12d09282029f539173"].conditions.AvailableForFinish[3]._props.counter.conditions[2]._props.equipmentInclusive;
				
				DatabaseServer.tables.templates.quests["5c0d4c12d09282029f539173"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentInclusive = [
					...JsonUtil.clone(Peacekeepingmission1),
					...untarGear
				];
				DatabaseServer.tables.templates.quests["5c0d4c12d09282029f539173"].conditions.AvailableForFinish[1]._props.counter.conditions[2]._props.equipmentInclusive = [
					...JsonUtil.clone(Peacekeepingmission2),
					...untarGear
				];
				DatabaseServer.tables.templates.quests["5c0d4c12d09282029f539173"].conditions.AvailableForFinish[2]._props.counter.conditions[2]._props.equipmentInclusive = [
					...JsonUtil.clone(Peacekeepingmission3),
					...untarGear
				];
				DatabaseServer.tables.templates.quests["5c0d4c12d09282029f539173"].conditions.AvailableForFinish[3]._props.counter.conditions[2]._props.equipmentInclusive = [
					...JsonUtil.clone(Peacekeepingmission4),
					...untarGear
				];
			};
			
			// The survivalist path. Unprotected, but dangerous
			if (DatabaseServer.tables.templates.quests["5d25aed386f77442734d25d2"]) {
				const UnprotectedButDangerous = DatabaseServer.tables.templates.quests["5d25aed386f77442734d25d2"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
				
				DatabaseServer.tables.templates.quests["5d25aed386f77442734d25d2"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
					...JsonUtil.clone(UnprotectedButDangerous),
					...armoredVests
				];
			};
			
			// Swift One
			if (DatabaseServer.tables.templates.quests["60e729cf5698ee7b05057439"]) {
				const SwiftOne = DatabaseServer.tables.templates.quests["60e729cf5698ee7b05057439"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
				
				DatabaseServer.tables.templates.quests["60e729cf5698ee7b05057439"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
					...JsonUtil.clone(SwiftOne),
					...armoredGear
				];
			};
		}
	}
	
	static addUntarGen4(db, ItemBase, NewItemID, BundlePath)
    {
        // create item
		let NewItem = JsonUtil.clone(DatabaseServer.tables.templates.items[ItemBase]);

        NewItem._id = NewItemID;
        NewItem._name = NewItemID;
        NewItem._props.Prefab.path = BundlePath;
		NewItem._props.CreditsPrice = 95019;
		NewItem._props.armorClass = 4;
		NewItem._props.speedPenaltyPercent = -9;
		NewItem._props.mousePenalty = -5;
		NewItem._props.weaponErgonomicPenalty = -6;
        DatabaseServer.tables.templates.items[NewItemID] = NewItem;
		
        // handbook
        let ItemHandbook = JsonUtil.clone(DatabaseServer.tables.templates.handbook.Items.find((item) =>
        {
            return item.Id === ItemBase;
        }));

        ItemHandbook.Id = NewItem._id;
		ItemHandbook.Price = 95019;
        DatabaseServer.tables.templates.handbook.Items.push(ItemHandbook);
		
		// locale
		for (const localeID in DatabaseServer.tables.locales.global)
        {
			// en placeholder
			DatabaseServer.tables.locales.global[localeID].templates[NewItemID] = JsonUtil.deserialize(VFS.readFile(`${db}locales/en.json`))[NewItemID];
			
			// actual locale
			if (VFS.exists(`${db}locales/${localeID}.json`)) {
				DatabaseServer.tables.locales.global[localeID].templates[NewItemID] = JsonUtil.deserialize(VFS.readFile(`${db}locales/${localeID}.json`))[NewItemID];
			}
        }
		
		// add item to the ragfair
        DatabaseServer.tables.traders["ragfair"].assort.items.push({
            "_id": `${NewItemID}_ragfairOffer`,
            "_tpl": NewItemID,
            "parentId": "hideout",
            "slotId": "hideout",
            "upd": {
                "UnlimitedCount": true,
                "StackObjectsCount": 999999999
            }
        });
		
		// add purchase cost
        DatabaseServer.tables.traders["ragfair"].assort.barter_scheme[`${NewItemID}_ragfairOffer`] = [
            [
            {
                "count": NewItem._props.CreditsPrice,
                "_tpl": "5449016a4bdc2d6f028b456f"
            }]
        ]
		
		// add trader standing requirement
        DatabaseServer.tables.traders.ragfair.assort.loyal_level_items[`${NewItemID}_ragfairOffer`] = 1;
		
		// update filters/conflicts
		let dbItems = DatabaseServer.tables.templates.items;
		
		for (const item in dbItems) {
			const itemConflictId = dbItems[item]._props.ConflictingItems;
			
			for (const itemInConflicts in itemConflictId) {
				let itemInConflictsFiltersId = itemConflictId[itemInConflicts];
					
				if (itemInConflictsFiltersId === ItemBase) {
					itemConflictId.push(NewItemID);
				}
			}
			
			for (const slots in dbItems[item]._props.Slots) {
				const slotsId = dbItems[item]._props.Slots[slots]._props.filters[0].Filter;
				
				for (const itemInFilters in slotsId) {
					let itemInFiltersId = slotsId[itemInFilters]
					
					if (itemInFiltersId === ItemBase) {
						slotsId.push(NewItemID);
					}
				}
			}
		}
    }
}

module.exports = AdditionalGearUntar;