import Steedos from "../../";

class accountTriggers extends Steedos.Trigger {

	name = "foo";
    object_name = "accounts";

    beforeInsert(userId, doc) {

	}

    beforeUpdate(userId, doc, fieldNames, modifier, options) {

	}

    beforeDelete(userId, doc) {

	}

    afterInsert(userId, doc) {
	}

    afterUpdate(userId, doc, fieldNames, modifier, options) {
	}
    
    afterDelete(userId, doc) {
	}
}

export default accountTriggers;