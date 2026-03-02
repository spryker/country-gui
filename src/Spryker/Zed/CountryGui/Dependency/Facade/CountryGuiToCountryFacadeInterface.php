<?php

/**
 * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.
 * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.
 */

namespace Spryker\Zed\CountryGui\Dependency\Facade;

use Generated\Shared\Transfer\CountryCollectionTransfer;

interface CountryGuiToCountryFacadeInterface
{
    public function getAvailableCountries(): CountryCollectionTransfer;

    /**
     * @param array<\Generated\Shared\Transfer\StoreTransfer> $storeTransfers
     *
     * @return array<\Generated\Shared\Transfer\StoreTransfer>
     */
    public function expandStoreTransfersWithCountries(array $storeTransfers): array;
}
