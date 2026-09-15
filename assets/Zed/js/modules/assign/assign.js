/**
 * Copyright (c) 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

'use strict';

/**
 * @deprecated Will be removed in the next major version.
 *
 * Table selection is now configured from PHP via `setTableAttributes(['data-selectable' => ...])`.
 * This file is intentionally a no-op: it is kept only so that projects referencing it keep
 * building. Re-running the old wiring here would initialise the table a second time, on top of
 * the one the Gui table library already created.
 */

module.exports = require('../select-country-table-api/select-country-table-api');
