/**
 * Copyright (c) 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

'use strict';

/**
 * @deprecated Will be removed in the next major version.
 *
 * The assignment behaviour this bundle used to wire is now configured from PHP via
 * `setTableAttributes(['data-selectable' => ...])` and executed by the Gui table library.
 * This file is intentionally a no-op: it is kept only so that projects referencing it keep
 * building. Re-running the old wiring here would initialise the table a second time, on top of
 * the one the Gui table library already created.
 */
