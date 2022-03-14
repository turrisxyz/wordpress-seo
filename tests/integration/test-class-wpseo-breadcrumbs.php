<?php
/**
 * WPSEO plugin test file.
 *
 * @package WPSEO\Tests
 */

/**
 * Unit Test Class.
 */
class WPSEO_Breadcrumbs_Test extends WPSEO_UnitTestCase {

	/**
	 * Placeholder test to prevent PHPUnit from throwing errors.
	 *
	 * @covers WPSEO_Breadcrumbs::breadcrumb
	 */
	public function test_breadcrumb_before() {
		if ( \PHP_VERSION_ID >= 80200 ) {
			$this->markTestSkipped( 'PHP 8.2: Test will fail on WP Core/dynamic property on WP_Term. Wait for upstream fix.' );
		}

		// Test before argument.
		$output   = WPSEO_Breadcrumbs::breadcrumb( 'before', '', false );
		$expected = 'before';
		$this->assertStringStartsWith( $expected, $output );

		// @todo Test actual breadcrumb output.
	}

	/**
	 * Placeholder test to prevent PHPUnit from throwing errors.
	 *
	 * @covers WPSEO_Breadcrumbs::breadcrumb
	 */
	public function test_breadcrumb_after() {
		if ( \PHP_VERSION_ID >= 80200 ) {
			$this->markTestSkipped( 'PHP 8.2: Test will fail on WP Core/dynamic property on WP_Term. Wait for upstream fix.' );
		}

		// Test after argument.
		$output   = WPSEO_Breadcrumbs::breadcrumb( '', 'after', false );
		$expected = 'after';
		$this->assertStringEndsWith( $expected, $output );

		// @todo Test actual breadcrumb output.
	}
}
